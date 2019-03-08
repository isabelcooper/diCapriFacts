const Twilio = require("../src/sendTwilio.js");
const Recipient = require("../src/recipient.js");

class Sender {
    constructor(name, twilio = new Twilio) {
        this.sent = 0;
        this.twilio = twilio;
        this.recipient = new Recipient(name);
    }
}

Sender.prototype.send = function(message) {
    if (this.sent >= 10) {

    } else {
        this.twilio.send(message);
        this.sent += 1
    }
};

module.exports = Sender;