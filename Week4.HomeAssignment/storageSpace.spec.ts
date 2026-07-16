import { expect, test } from '@playwright/test'

test('SalesForce Account', async ({ page }) => {
    //Launch URL
    await page.goto("https://login.salesforce.com/?locale=in");
    await page.getByRole("textbox", { name: "Username" }).fill("divyaseelan1994.6712a957bf0b@agentforce.com") // playwright locators
    await page.getByRole("textbox", { name: "Password" }).fill("Summer$012025");
    await page.getByRole("button",{name:"Log In"}).click();
    await page.waitForTimeout(15000);
    await page.locator('//button[@title="App Launcher"]').click(); // home page
    
    //Save the cookies + localstorage from the the application tab in dev tool --> Local Storage
    await page.context().storageState({ path: "Data/login_salesforce.json" })
})
