const Twilio = require("../src/sendTwilio.js");
const Recipient = require("../src/recipient.js");
const FactPicker = require("../src/factPicker.js");
// sender = new Sender(req.query.reveal, req.query.theme);
// sender.addRecipient(req.query.number);
// sender.run()

class Sender {
    constructor(reveal, theme, twilio = Twilio, factpicker = FactPicker) {
        this.sent = 0;
        this.reveal = reveal;
        this.theme = theme;
        this.twilio = new twilio;
        this.factPicker = new factpicker(this.theme)
        this.recipient = []
    }
}

Sender.prototype.addRecipient = function(phone) {
    recipient = new Recipient(phone);
    return recipient.saveToDB(); // needs to return the outcome user id
};

Sender.prototype.run = function() {
    if (this.sent >= 10) {
        message = this.factPicker.finalFact()
        this.twilio.sendFinal(message) // need to think about where final message is stored?
    } else {
        message = this.factPicker.randomFact()
        this.twilio.send(message);
        this.sent += 1
    }
};

module.exports = Sender;

// ONE
// new sender ( theme, reveal) >> creates in table sender
//sender.addRecipient(number) >> creates in table recipient with sender id
// sender.run >> triggers send handing in user.number as argument

// retrieving sender can access user_id => user email through a join? or create a user object to access.

    // 2
    // new recipient (number) >> creates in table recipient
    // recipient.add sender (theme, reveal) >> creates in table sender with user id
// recipient.sender.run sending process >> still has to create both objects on return