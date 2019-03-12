const Sender = require("../src/sender.js");

class FakeTwilio { }
FakeTwilio.prototype.send = function(message) { };
FakeTwilio.prototype.sendFinal = function(message) { };

class FakeFactPicker { };
FakeFactPicker.prototype.randomFact = function(category) { };
FakeFactPicker.prototype.finalFact = function(category) { };

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
        mock = jest.spyOn(fakeFactPicker.prototype, 'randomFact');
        mock.mockReturnValue("message");

        sender.run();
        expect(faketwilio.prototype.send).toBeCalledWith("message");
    });

    describe('10th message', function() {
        fakeFactPicker = FakeFactPicker;
        faketwilio = FakeTwilio;
        let sender = new Sender(true, "cat", faketwilio, fakeFactPicker);
        jest.spyOn(fakeFactPicker.prototype, 'finalFact');

        it('should not send final message to twilio before 10th send', function() {
            sender.run(); // 1
            sender.run(); // 2
            sender.run(); // 3
            sender.run(); // 4
            sender.run(); // 5
            sender.run(); // 6
            sender.run(); // 7
            sender.run(); // 8
            sender.run(); // 9
            expect(fakeFactPicker.prototype.finalFact).not.toHaveBeenCalled();
        });
        it('should send final message to twilio on 10th send', function() {
            sender.run(); // 10
            expect(fakeFactPicker.prototype.finalFact).toHaveBeenCalled();
        });
    });

    // update tables to track user, sender, theme and sent messages
});

