describe('Adding a recipient', () => {

    describe('Google', () => {
        beforeAll(async () => {
            await page.goto('https://google.com');
        });

        it('should be titled "Google"', async () => {
            await expect(page.title()).resolves.toMatch('Google');
        });
    });

    describe('Adding a recipient', () => {
        beforeAll(async () => {
            await page.goto('http://localhost:5432');
        });

        it("asks users to input", async () => {
            await expect(page).toMatch("prank your friends");
        });

        it('users can enter recipient details and are redirected to success page', async () => {
            await expect(page).toFillForm('form[name="addRecipient"]', {
                phone: '012345 678910',
                theme: "cat",
                reveal: true
            });
            await page.click('#submit');
            await expect(page).toMatch("Submitted")
            // await expect(page).toMatch("") expectation on url /success?
        });
    });

    describe("success page", async () => {
        beforeAll(async () => {
            await page.goto('http://localhost:5432/success');
        });

        it("shows a confirmation message", async () => {
            await expect(page).toMatch("thank you");
        });

        it("shows a confirmation message", async () => {
            await expect(page).to // click button
            await expect(page).toMatch("thank you");
        });
    })

});
