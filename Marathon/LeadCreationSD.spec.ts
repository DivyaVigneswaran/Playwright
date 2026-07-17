/// <reference types="node" />

import { expect, test } from '@playwright/test'
import path from 'path';
test.use({ storageState: "Data/login_salesforce.json" })
test('Lead Creation and Conversion to Opportunity SalesForce Account', async ({ page }) => {
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

    //Enter Marketing in App Launcher search box
    await page.getByPlaceholder("Search apps or items...", { exact: true }).fill("Marketing");

    //Click Marketing CRM Classic
    await page.getByRole('link', { name: "Marketing CRM Classic" }).click();

    //Navigate to the Leads tab 
    await page.getByRole('link', { name: "Leads" }).click();

    //Click New Button
    await page.getByRole('button', { name: "New" }).click();

    //Select Saluation
    const Saluation = await page.getByRole('combobox', { name: "Salutation" }).click();
    await page.locator('//span[text()="Mrs."]').click();
    //Enter First Name
    await page.getByRole('textbox', { name: "First Name" }).fill("Divya");
    //Enter Last Name
    await page.getByRole('textbox', { name: "Last Name" }).fill("S");//Last Name
    //Enter Comapny Name
    await page.getByRole('textbox', { name: "Company" }).fill("SAMQUA");
    //Click Save
    await page.locator('//button[text()="Save"]').click();

    //locate the dropdown near Submit for Approval button
    await page.getByRole('button', { name: "Show more actions" }).click();

    //click on the Convert link
    await page.locator('//span[text()="Convert"]').click();

    // Click on the Opportunity Name input field, clear and enter a new opportunity name.
    await page.locator('button.transparentButton').last().click();
    const opportunityName = page.getByRole('textbox', { name: /Opportunity Name/i});
    await expect(opportunityName).toBeVisible();
    await opportunityName.clear();
    await opportunityName.fill('Divya Opportunity');

    //Click on the Convert button.
    await page.getByRole('button', { name: "Convert" }).click();

    //Click on the Goto Leads button.
    await page.getByRole('button', { name: "Go to Leads" }).click();

    //Navigate to the Opportunities tab and search for the opportunity linked with the converted lead.
    await page.getByRole('link', { name: "Opportunities" }).click();
    await page.getByRole('searchbox', { name: "Search this list..." }).fill("Divya Opportunity");

    await page.locator('//a[@class="slds-truncate"]').first().click();







});