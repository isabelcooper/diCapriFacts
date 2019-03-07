 const Recipient = require("../src/recipient");

describe('Recipients', function() {
    it('should store the email address', function() {
        let recipient = new Recipient("test@test.com");
        expect(recipient.email).toEqual('test@test.com')
    });
});