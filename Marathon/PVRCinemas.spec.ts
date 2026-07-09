import { expect, test } from '@playwright/test'

test('PVR Cinemas', async ({ page }) => {
    //URL
    await page.goto("https://www.pvrcinemas.com/.");

    //Select City - Chennai
    await page.locator('//h6[text()="Chennai"]').click();

    //Select CInema
    await page.locator('//span[text()="Cinema"]').click();

    //Select Cinema Drop down
    await page.locator('//span[text()="Select Cinema"]').click();

    //Select the available Cinema
    await page.locator('//span[text()="PVR Sathyam Royapettah Chennai"]').click();

    //Select Date
    await page.locator('//span[text()="Tomorrow"]').click();

    //Select Movie
    //await page.locator('//span[text()="Select Movie"]').click();
    await page.locator("//li[@class='p-dropdown-item']").first().click();
    await page.waitForTimeout(2000);
    /* await page.locator("//span[text()='Select Movie']").click();
    await page.getByRole('option').first().click(); */

    //Select Timing
    await page.locator('//ul[@class="p-dropdown-items"]').first().click();


    //Clcik SUbmit
    await page.getByRole("button", { name: 'Submit' }).click();

    //Accept Button
    await page.getByRole('button', { name: 'Accept' }).click();

    //Select the Seat
    await page.locator("//span[@class='seat-current-pvr'][contains(@id,'L:10')]").click();

    //selected seat information is displayed.
    await expect(page.locator('//div[@class="seat-number"]')).toBeVisible();

    //total ticket amount is displayed.
    await expect(page.locator('//div[contains(@class,"grand-amount")]')).toBeVisible();

    //Click on the Proceed button.
    await page.getByRole('button', { name: 'Proceed' }).click();

});