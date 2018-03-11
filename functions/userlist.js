const admin = require('firebase-admin');

module.exports = (req, res) => {
    admin.auth().listUsers(1000)
        .then((listUsersResult) => {
            let userArray = [];
            listUsersResult.users.forEach((userRecord) => {
                userArray.push({ uid:userRecord.uid, email: userRecord.email, name: userRecord.email || userRecord.displayName });
            });
            res.send({userArray});
            return;
        }).catch((error) => {
            res.status(422).send({ error: err });
        });
      
}
