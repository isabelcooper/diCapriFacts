const Sender = require("../src/sender.js");

class FakeTwilio { }
FakeTwilio.prototype.send = function(message) { };

class FakeFactPicker { };
FakeFactPicker.prototype.randomFact = function(category) { };

describe('Sender', function() {
    it('should count how many messages have been sent', function() {
        let sender = new Sender(true, "cat", FakeTwilio);
        expect(sender.sent).toEqual(0);
        sender.run();
        expect(sender.sent).toEqual(1);
        sender.run();
        expect(sender.sent).toEqual(2)
    })

    it('should send a message to the twilio sender', function() {
        faketwilio = FakeTwilio;
        fakeFactPicker = FakeFactPicker;
        let sender = new Sender(true, "cat", faketwilio, fakeFactPicker);

        jest.spyOn(faketwilio.prototype, 'send')
        mock = jest.spyOn(fakeFactPicker.prototype, 'randomFact')
        mock.mockReturnValue("message");

        sender.run();
        expect(faketwilio.prototype.send).toBeCalledWith("message");
    });

    // it('should send final message to twilio on 10th send', function() {
    //    need mocking as above
    // })

    // update tables to track user, sender, theme and sent messages
})

