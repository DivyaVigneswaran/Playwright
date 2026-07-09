import { expect, test } from '@playwright/test'

test('SalesForce Account', async ({ page }) => {
    //Launch URL
    await page.goto('https://login.salesforce.com/')
    
    //Enter Username
    await page.getByLabel('Username').fill("divyaseelan1994.6712a957bf0b@agentforce.com")

    //Enter Password
    await page.getByLabel('Password').fill("Summer$012025")
    //await page.getByRole('textbox',{name: "Username"}).fill("divyaseelan1994.6712a957bf0b@agentforce.com")

    //Click Login
    await page.locator('#Login').click();
})