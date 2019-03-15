 const Recipient = require("../src/recipient");

describe('Recipients', function() {
    it('should store the phone number', function() {
        let recipient = new Recipient("012345 678910");
        expect(recipient.phone).toEqual('012345 678910')
    });
});