const { AccSId, AuthToken, FromNumber, TestToNumber } = require('../.././config');
const client = require('twilio')(AccSId, AuthToken);

class TwilioSender {
    constructor(toNumber = TestToNumber) {
        this.toNumber = toNumber
    }
}
TwilioSender.prototype.send = function(fact) {
     console.log("in twilio send")
    console.log(`${fact}, ${FromNumber}, ${this.toNumber}` )
    client.messages
        .create({
            body: fact,
            from: FromNumber,
            to: this.toNumber
        })
        .then(message => console.log(message.sid));
     console.log("twilio send compelte")
};


module.exports = TwilioSender;

