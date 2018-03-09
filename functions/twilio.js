const twilio = require('twilio');

//export this... really
const accountSid = 'AC8e17e5f1002ff0231c0a1392fa2a8168';
const authToken = '81f0d9b076c7486cd2953737afd77af5';

module.exports = new twilio.Twilio(accountSid, authToken);
