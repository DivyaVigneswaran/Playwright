import { expect, test } from '@playwright/test'
import path from 'path';
test.use({ storageState: "Data/login_salesforce.json" })

test('SalesForce Account', async ({ page }) => {
    //Launch URL
    await page.goto("https://orgfarm-81ff929aed-dev-ed.develop.my.salesforce-setup.com/lightning/setup/SetupOneHome/home")

    //Verify the title
    await expect(page).toHaveTitle("Lightning Experience");

    //Click App Launcher
    await page.getByRole('button', { name: "App Launcher" }).click();
    //await page.locator('//button[@title="App Launcher"]').click(); // home page
    //await page.locator('.slds-icon-waffle').click();

    //Click View ALl
    await page.getByText("View All", { exact: true }).click();

    //Enter Accounts in App Launcher search box
    await page.getByPlaceholder("Search apps or items...", { exact: true }).fill("Accounts");

    //Click Accounts
    await page.getByRole('link', { name: "Accounts" }).click();

    //Click New
    await page.getByRole('button', { name: "New" }).click();

    //Enter Account Name
    /* const accountName = 'TestLeaf Account';
    await page.getByLabel('Account Name').fill(accountName); */
    await page.getByRole('textbox', { name: "Account Name" }).fill("TestLeaf");

    //Select Warm from the Rating dropdown
    await page.getByRole('combobox', { name: "Rating" }).click();
    await page.locator('//span[text()="Warm"]').click();

    //Select Prospect from the Type dropdown
    await page.getByRole('combobox', { name: "Type" }).click();
    await page.getByRole('option', { name: "Prospect" }).click();

    //Select Banking from the Industry dropdown
    await page.getByRole('combobox', { name: "Industry" }).click();
    await page.locator('//span[text()="Banking"]').click();

    //Select Public from the Ownership dropdown
    await page.getByRole('combobox', { name: "Ownership" }).click();//Public
    await page.locator('//span[text()="Public"]').click();

    //Click Save
    await page.locator('//button[text()="Save"]').click();

    //Assert the Account created
    await expect(page.getByText('TestLeaf')).toBeVisible();

    //Upload files

    const FileUpload = page.waitForEvent("filechooser");

    await page.locator('//span[text()="Upload Files"]').click();

    const fileUpload = await FileUpload

    fileUpload.setFiles(path.join(__dirname, "../../Data/TestLeaf Logo.png"))

    //Click Done and assert the uploaded file
    // Wait for upload
    await expect(page.getByText('Done')).toBeVisible();
    // Click Done
    await page.getByRole('button', { name: "Done" }).click();
    // Verify uploaded file
    await expect(page.getByText('TestLeaf Logo')).toBeVisible();

});