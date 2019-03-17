sleep = require('sleep')
describe('Adding a recipient', () => {
    beforeAll(async () => {
        await sleep.sleep(1);
        await page.goto('http://localhost:5000');
    });

    it("asks users to input", async () => {
        await expect(page).toMatch("prank your friends");
    });

    it('users can enter recipient details and are redirected to success page', async () => {
        await expect(page).toFillForm('form[name="addRecipient"]', {
            phone: '012345 678910',
            theme: "cat",
            reveal: 'true',
        });
        // await page.click('#submit'); // uncomment to pass test - but NB twilio not mocked so will send sample
        await expect(page).toMatch("Congratulations")
        // await expect(page).toMatch("") expectation on url /success?
    });
});

describe("success page", async () => {
    beforeAll(async () => {
        await page.goto("http://localhost:5000/success");
    });

    it("shows a confirmation message", async () => {
        await expect(page).toMatch("Congratulations");
    });

    it("shows a confirmation message", async () => {
        await page.click('#more');
        await expect(page).toMatch("April Fool");
    });
});
