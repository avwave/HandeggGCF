const twilio = require('twilio');

//export this... really
const accountSid = 'AC6c4a2208c90f58fca28f5b46da09dbed';
const authToken = '06981a1e72e3b161d0a639cfc25a83f3';

module.exports = new twilio.Twilio(accountSid, authToken);
