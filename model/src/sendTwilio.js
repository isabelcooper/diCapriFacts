const { AccSId, AuthToken, FromNumber, TestToNumber } = require('../.././config');
const client = require('twilio')(AccSId, AuthToken);

class TwilioSender {}
TwilioSender.prototype.send = function(fact, toNumber) {
    client.messages
        .create({
            body: fact,
            from: FromNumber,
            to: toNumber
        })
        .then(message => console.log(message.sid));
};


module.exports = TwilioSender;