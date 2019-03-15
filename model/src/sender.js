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
        this.factPicker = new factpicker(this.theme);
        this.recipient = []
    }
}

Sender.prototype.addRecipient = function(phone) {
    recipient = new Recipient(phone);
    return recipient.saveToDB(); // needs to return the outcome user id
};

Sender.prototype.run = function() {
    this.sent >= 9 ? this._finalFact() : this._randomFact()
};

Sender.prototype._finalFact = function() {
    message = this.factPicker.finalFact(this.reveal);
    this.twilio.sendFinal(message)
    // need to think about where final message is stored?
}

Sender.prototype._randomFact = function() {
    message = this.factPicker.randomFact();
    console.log("random fact: " + message);
    this.twilio.send(message);
    this._countSent()
};

Sender.prototype._countSent = function() {
    this.sent += 1
};
// Sender.prototype.updateDB = function() {
//     connection.pool.query(`INSERT INTO recipients (email, phone) VALUES ('${email}', '${phone}')`);
//     // find sender in DB (match on id) & upxdate ??
// }
module.exports = Sender;
