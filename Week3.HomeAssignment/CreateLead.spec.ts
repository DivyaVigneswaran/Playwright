import { expect, test } from '@playwright/test'

test('Create Lead', async ({ page }) => {
    //URL
    await page.goto("http://leaftaps.com/opentaps/control/main");
    //Username
    await page.getByLabel("Username").fill("Demosalesmanager")
    //Password
    await page.getByLabel("Password").fill("crmsfa");
    //Login Button
    await page.getByRole("button", { name: 'Login' }).click();
    //Click CRMS/SFA
    await page.getByRole("link", { name: 'CRM/SFA' }).click();
    //Click Leads
    await page.locator('//a[text()="Leads"]').click();
    //Click Create Leads
    await page.locator('//a[text()="Create Lead"]').click();
    //Comapany Name
    await page.locator('//input[@id="createLeadForm_companyName"]').fill("Testleaf2");
    //First Name
    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Divya2");
    //Last Name
    await page.locator('//input[@id="createLeadForm_lastName"]').fill("S2");
    //Saluation
    await page.locator('#createLeadForm_personalTitle').fill("Test")
    //Title
    await page.locator('#createLeadForm_generalProfTitle').fill("Title")
    //Total Revenue
    await page.locator('#createLeadForm_annualRevenue').fill("2000000");
    //Department
    await page.locator('#createLeadForm_departmentName').fill("IT");
    //Phone_Number
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("987643210");
    //Click Create Lead Button
    await page.locator('.smallSubmit').click();

    // ===============================
    // Auto-Retry Assertions
    // ===============================

    await expect(page.locator("#viewLead_companyName_sp")).toContainText("Testleaf2");

    await expect(page.locator("#viewLead_firstName_sp")).toContainText("Divya2");

    await expect(page.locator("#viewLead_lastName_sp")).toContainText("S2");

    await expect(page.locator("#viewLead_statusId_sp")).toContainText("Assigned");

    // ===============================
    // Non-Retry Assertions
    // ===============================

    const company = await page.locator("#viewLead_companyName_sp").textContent();
    const firstName = await page.locator("#viewLead_firstName_sp").textContent();
    const lastName = await page.locator("#viewLead_lastName_sp").textContent();
    const status = await page.locator("#viewLead_statusId_sp").textContent();

    expect(company).toContain("Testleaf2");
    expect(firstName).toContain("Divya2");
    expect(lastName).toContain("S2");
    expect(status).toContain("Assigned");






})