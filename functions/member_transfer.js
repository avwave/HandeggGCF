const admin = require('firebase-admin');

module.exports = (req, res) => {
    
    const source_user = String(req.body.source_user);
    const member_id = String(req.body.member_id);
    const dest_user = String(req.body.dest_user);

    if (!source_user || !member_id ||!dest_user) {
        return res.status(422).send({ error: 'bad input' });
    }
    const transferdate = Date.now();

    source_ref = admin.database().ref('/users/'+source_user+'/members/'+member_id)
    dest_ref = admin.database().ref('/users/'+dest_user+'/members/'+member_id)

    source_ref.once('value').then(snap => {
        return dest_ref.set(snap.val());
    }).then(() => {
        return dest_ref.update({
            currentOwner: dest_user,
            previousOwner: source_user,
            modifiedOn: transferdate
        });
    }).then(() => {
        return source_ref.set(null);
    }).then(() => {
        return admin.database().ref('/transferlogs')
            .push({
                transferdate: transferdate,
                member: member_id,
                from: source_user,
                to: dest_user
            });
    }).then(() => {
        return res.send( {success: true} )
    }).catch(err => {
        return res.status(422).send({ error: err });
    });

}
