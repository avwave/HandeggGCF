const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require('./service_account.json');
const requestOTP = require('./request_otp');
const verifyOTP = require('./verify_otp');
const userList = require('./userlist');
const memberTransfer = require('./member_transfer');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://teamsters-d00e2.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestOTP = functions.https.onRequest(requestOTP);
exports.verifyOTP = functions.https.onRequest(verifyOTP);
exports.userList = functions.https.onRequest(userList);
exports.memberTransfer = functions.https.onRequest(memberTransfer);