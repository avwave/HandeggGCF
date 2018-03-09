const admin = require('firebase-admin');

module.exports = (req, res) => {
    if (!req.body.phone || !req.body.email) {
        return res.status(422).send({ error: 'Bad Input' });
    }

    const phone = String(req.body.phone).replace(/[^\d]/g, "");

    admin.auth().createUser({ uid: phone, email: req.body.email })
        .then (user => { return res.send(user) })
        .catch((err) => {
            return res.status(422).send({ error: err });
        });
}
