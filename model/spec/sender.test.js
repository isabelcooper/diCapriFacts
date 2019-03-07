const Sender = require("../src/sender.js");

class FakeTwilio {
    constructor(toNumber) {
        this.toNumber = toNumber
    }
}

FakeTwilio.prototype.send = function(message) {
    console.log("hello");
    return message
}

describe('Sender', function() {
    it('should count how many messages have been sent', function() {
        let sender = new Sender();
        expect(sender.sent).toEqual(0)
        sender.send()
        expect(sender.sent).toEqual(1)
        sender.send()
        expect(sender.sent).toEqual(2)
    })

    // it('should send a message to the twilio sender', function() {
    //     let sender = new Sender(new FakeTwilio);
    //     const mock = jest.spyOn(FakeTwilio.prototype, 'send')
    //     mock.mockReturnValue("message");
    //     // expect(FakeTwilio.send()).toBeCalledWith("message")
    //     // // FakeTwilio.send("message")
    //     // sender.send("message")
    // })
})

