const Sender = require("../src/sender.js");

describe('Sender', function() {
    it('should count how many messages have been sent', function() {
        //mock twilio?
        let sender = new Sender();
        expect(sender.sent).toEqual(0)
        sender.send()
        expect(sender.sent).toEqual(1)
        sender.send()
        expect(sender.sent).toEqual(2)
    })
})

