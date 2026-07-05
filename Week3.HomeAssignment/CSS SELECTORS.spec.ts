import {test} from '@playwright/test'
test('CSS selectors', async({page}) => {
    await page.goto("https://leaftaps.com/opentaps/control/main")

    //Username
    await page.locator('#username').fill("Demosalesmanager"); 

    //Password
    await page.locator('#password').fill("crmsfa"); 

    //Click Login
    await page.locator('.decorativeSubmit').click();

    //Click CRM/SFA
    await page.locator('//a[contains(text(),"CRM/SFA")]').click();

    //Click Leads
    await page.locator('//a[text()="Leads"]').click();

    //Click Create Leads
    await page.locator('//a[text()="Create Lead"]').click();

    //Fill Company Name
    await page.locator('#createLeadForm_companyName').fill("PlaywrightJS");

    //Fill First Name
    await page.locator('#createLeadForm_firstName').fill("Batch");

    //Fill Last Name
    await page.locator('#createLeadForm_lastName').fill("JUN26");

    //Saluation
    await page.locator('//input[@name="personalTitle"]').fill("1234");

    //Title
    await page.locator('#createLeadForm_generalProfTitle').fill("Title");
    
    //Annual Revenue
    await page.locator('//input[@name="annualRevenue"]').fill("1200000");

    //Department    
    await page.locator('#createLeadForm_departmentName').fill("Information Technology");

    //Phone Number    
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("25543471");

    //Click Submit
    await page.locator('.smallSubmit').click();

    // Page Title
    console.log(await page.title());

     // Close both browsers
    await page.close();









})