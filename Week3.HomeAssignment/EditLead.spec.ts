import { expect, test } from '@playwright/test'

test('Edit Lead', async ({ page }) => {
    //URL
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Username
    await page.getByLabel("Username").fill("Demosalesmanager")

    //Password
    await page.getByLabel("Password").fill("crmsfa");

    //Login Button
    await page.getByRole('button', { name: 'Login' }).click();

    //Click CRMS/SFA
    await page.getByRole('link', { name: 'CRM/SFA' }).click();

    //Click Leads
    await page.locator('//a[text()="Leads"]').click();

    //FindLeads
    await page.getByRole('link', { name: 'Find Leads' }).click();

    //First Name
    await page.locator('//input[@name="firstName"]').last().fill("Divya");

    //Click Find Leads Button
    await page.getByRole('button', { name: 'Find Leads' }).click();

    //Click first resulting ID
    const firstLead = page.locator("//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a").first();
    await expect(firstLead).toBeVisible({ timeout: 10000 });
    await firstLead.click();

    //CLick Edit
    //await page.getByRole('link', { name: 'Edit' }).click();
    await page.locator('//a[text()="Edit"]').click();

    //Edit Company Name
    await page.locator('#updateLeadForm_companyName').fill("SAMQUA");

    //Edit AnnualRevenue
    await page.locator('#updateLeadForm_annualRevenue').fill("200000");

    //Edit Department
    await page.locator('#updateLeadForm_departmentName').fill("IT");

    //Enter Description
    await page.locator('#updateLeadForm_description').fill("Edited the Account");

    //CLick Update
    await page.getByRole('button', { name: 'Update' }).click();

    // Verify the edited fields using appropriate assertions
    await expect(page.locator("#viewLead_companyName_sp")).toContainText("SAMQUA");

    await expect(page.locator("#viewLead_annualRevenue_sp")).toContainText("$200,000.00");

    await expect(page.locator("#viewLead_departmentName_sp")).toContainText("IT");

});