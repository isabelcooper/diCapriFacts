class Sender {
    constructor() {
        this.sent = 0
    }
}

Sender.prototype.send = function() {
    this.sent += 1
}

module.exports = Sender