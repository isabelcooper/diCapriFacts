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

Sender.prototype.runSet = function() {
    this.run();
    while (this.sent < 10 ) { this._runWithDelay() }
};

Sender.prototype._runWithDelay = function(){
    setTimeout(this.run, 50000 );
};

Sender.prototype.run = function() {
    let fact = this.sent === 9
        ? this.factPicker.finalFact(this.reveal)
        : this.factPicker.randomFact();
    this.twilio.send(fact, this.recipient.phone);
    this._countSent();
};

Sender.prototype._countSent = function() {
    this.sent += 1
};

Sender.prototype._randomTime = function() {
    return Math.floor(Math.random() * 900) - 120;
};

module.exports = Sender;

// update sent