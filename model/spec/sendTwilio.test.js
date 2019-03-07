const TwilioSender = require("../src/sendTwilio.js");

    describe('SendTwilio', function() {
    it('should pass message into body', function() {
        twilioSender = new TwilioSender()
        expect(twilioSender.send("hello")).toEqual("hello")
    })
})
