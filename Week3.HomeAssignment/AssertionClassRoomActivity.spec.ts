import { expect, test } from "@playwright/test";

test("Assertion Classroom Activity", async ({ page }) => {
    await page.goto("https://leafground.com/input.xhtml");

    //toBeDisabled
    await expect(page.locator('//input[@placeholder="Disabled"]')).toBeDisabled();

    //toBeEditable
    const error =await page.locator('(//input[contains(@class,"ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all")])[7]')
    await expect(error).toBeEditable();
    await error.fill("Text");

    //Soft Assert
    await expect.soft(page.locator('(//input[contains(@class,"ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled")])[1]')).toBeDisabled();
    
    //Clear existing data and fill new data
        const existingdata  =await page.locator('(//input[contains(@class,"ui-inputfield ui-inputtext ui-widget ui-state-default ui-corner-all ui-state-filled")])[1]');
        await existingdata.fill("Playwright Learning")


})