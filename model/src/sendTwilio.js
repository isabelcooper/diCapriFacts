const { AccSId, AuthToken, FromNumber, TestToNumber } = require('../.././config');
const client = require('twilio')(AccSId, AuthToken);

class TwilioSender {
    constructor(toNumber = TestToNumber) {
        this.toNumber = toNumber
    }
}
TwilioSender.prototype.send = function(fact) {
    client.messages
        .create({
            body: fact,
            from: FromNumber,
            to: this.toNumber
        })
        .then(message => console.log(message.sid));
};


module.exports = TwilioSender;