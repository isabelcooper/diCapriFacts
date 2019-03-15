const Twilio = require("../src/sendTwilio.js");
const Recipient = require("../src/recipient.js");
const FactPicker = require("../src/factPicker.js");

class Sender {
    constructor(reveal, theme, twilio = Twilio, factpicker = FactPicker) {
        this.sent = 0;
        this.reveal = reveal;
        this.theme = theme;
        this.factPicker = new factpicker(this.theme);
        this.twilio = new twilio();
        this.recipient = ""
    }
}

Sender.prototype.addRecipient = function(phone) {
    this.recipient = new Recipient(phone);
    this.recipient.saveToDB(); // needs to return the outcome user id
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
    this.twilio.send(message, this.recipient.phone);
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
