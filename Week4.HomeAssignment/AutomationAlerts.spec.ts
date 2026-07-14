import { test, expect } from '@playwright/test';

test('Handle Confirm Alert', async ({ page }) => {
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');
    page.on("dialog", async (Alert) => {
        console.log('Alert Message:', Alert.message());
        console.log('Alert Type:', Alert.type());

        // Accept the alert
        await Alert.accept();
    });

    // Click the "Try it" button inside the iframe

    page.frameLocator('#iframeResult').getByRole("button", { name: "Try it" }).click();

    // Verify the result text
    const result = page
        .frameLocator('#iframeResult')
        .locator('#demo');

    await expect(result).toHaveText('You pressed OK!');





})