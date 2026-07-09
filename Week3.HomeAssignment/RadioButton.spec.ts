import { test, expect } from '@playwright/test';

test('Radio Button', async ({ page }) => {

    await page.goto("https://leafground.com/radio.xhtml");

    // Default selected browser (Safari)
    const safariRadio = page.locator('//div[@class="ui-radiobutton ui-widget"]//input[@value="Option3"]');
    await expect(safariRadio).toBeChecked();

    // Select Chrome
    const chromeRadio = page.locator("(//label[text()='Chrome'])[1]");
    await chromeRadio.check();

    // Verify Chrome is selected
    await expect(chromeRadio).toBeChecked();

    //Select City
    const City= await page.locator('//label[text()="Chennai"]');
    await City.check();
    await expect(City).toBeChecked();

    //AGe
    const Age = await page.locator('//label[text()="41-60 Years"]');
    await Age.check();
    await expect(Age).toBeChecked();
});