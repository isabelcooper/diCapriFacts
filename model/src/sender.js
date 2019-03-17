const Twilio = require("../src/sendTwilio.js");
const Recipient = require("../src/recipient.js");
const FactPicker = require("../src/factPicker.js");
let connection = require('../../database/connection')


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
    this.recipient.saveToDB();
};

Sender.prototype.savetoDB = async function() {
    await connection.pool.query(`INSERT INTO senders (sent, reveal, theme) VALUES ('${this.sent}', '${this.reveal}', '${this.theme}')`);
};

// Sender.prototype.runSet = function() {
//     this.run();
//     while (this.sent < 10 ) { this._runWithDelay() }
// };

// Sender.prototype._runWithDelay = function(){
//     setTimeout(this.log, 1000 );
//     // setTimeout(this.run, this._randomTime() );
// };
//
// Sender.prototype.log = function(){
//     console.log("here")
// };



Sender.prototype.run = function() {
    let fact = this.sent === 9
        ? this.factPicker.finalFact(this.reveal)
        : this.factPicker.randomFact();
    this.twilio.send(fact, this.recipient.phone);
    this._countSent();
    this._updateDB();
};

Sender.prototype._countSent = function() {
    this.sent += 1
};

Sender.prototype.updateDB = function() {
    // UPDATE DB record (and add timer to trigger same process?)
};

Sender.prototype._randomTime = function() {
    return Math.floor(Math.random() * 900) - 120;
};

module.exports = Sender;

// update sent