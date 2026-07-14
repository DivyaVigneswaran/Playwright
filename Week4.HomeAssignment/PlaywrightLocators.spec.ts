import { expect, test } from '@playwright/test'
test.use({ storageState: "Data/login_salesforce.json" })

test('SalesForce Account', async ({ page }) => {
    //Launch URL
    await page.goto("https://orgfarm-81ff929aed-dev-ed.develop.my.salesforce-setup.com/lightning/setup/SetupOneHome/home")

    //Verify the title
    await expect(page).toHaveTitle("Lightning Experience");

    //Click App Launcher
    await page.locator('//button[@title="App Launcher"]').click(); // home page
    //await page.locator('.slds-icon-waffle').click();

    //Click View ALl
    await page.getByText("View All", { exact: true }).click();

    //‘Service’ in the App Launcher Search box 
    await page.getByPlaceholder("Search apps or items...", { exact: true }).fill("Service");

    await page.locator('(//mark[text()="Service"])[1]').click();
    // Wait for Service app to load
    //await page.waitForLoadState('networkidle');

    // Wait until Accounts tab is visible
    await expect(page.locator("a[title='Accounts']")).toBeVisible();

    // Click Accounts using attribute-based CSS selector
    await page.locator("a[title='Accounts']").click();

    //Click New using getByRole
    await page.getByRole('button', { name: 'New' }).click();

    //Enter Account Name using attribute-based CSS selector
    const accountName = `Playwright Account ${Date.now()}`;
    await page.locator("input[name='Name']").fill(accountName);

    //Click Save using XPath
    await page.locator("//button[@name='SaveEdit']").click();

    //Verify Toast Message
    const toast = page.locator("//span[contains(@class,'toastMessage')]");
    await expect(toast).toContainText(accountName);

});