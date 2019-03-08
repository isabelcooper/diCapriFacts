describe('adding a recipient', () => {

    beforeAll(async () => {
        await page.goto('http://localhost:5432/feed');
    });

    it("asks users to input", async () => {
        await expect(page).toMatch("prank your friends");
    });
    it('users can add posts ', async () => {
        await expect(page).toFillForm('form[recipient="addPost"]', {
            content: 'test@test.com'
        });
        await page.click('#submit');
        await expect(page).toMatch("test@test.com")
    });
});