import { test, expect } from '@playwright/test';

test('Frames', async ({ page }) => {
    await page.goto('https://dev420234.service-now.com/');

    //1.Enter Username
    await page.getByLabel("User name").fill("admin");

    //2.Enter Password
    await page.locator('#user_password').fill("@AwpWS7o7M@a");

    //3.Click Login
    await page.getByRole('button', { name: 'Log in' }).click();

    //4.Click All
    await page.getByText('All', { exact: true }).click();

    //5.Enter Service Catalog in the navigation filter
    const ServiceCatalog = page.getByPlaceholder('Filter');
    await ServiceCatalog.fill("Service Catalog");
    // Press Enter
    await page.waitForTimeout(20000);
    await ServiceCatalog.press('Enter');
    await page.waitForLoadState("domcontentloaded");

    //6.Click Mobiles
    //await page.getByRole('link', { name: "Mobiles" }).click();
    await page.waitForTimeout(2000);
    const frame = page.frameLocator('iframe[name="gsft_main"]');
    await frame.locator('//a[text()="Mobiles"]').click();

    //7.Click Apple iPhone 13
    await frame.locator('//strong[text()="Apple iPhone 13"]').click();

    //8. Click No for ‘Is this a replacement for a lost or broken iPhone?’
    await frame.locator('//label[text()="No"]').click();

    //9.Select 500 MB [$1.00] from the Monthly data allowance and get the count of items present
    // Monthly Data Allowance
    const dataAllowance = frame.locator('select.form-control.cat_item_option');
    // Count the options
    console.log("No. of Options:", await dataAllowance.locator('option').count());
    // Select 500MB
    await dataAllowance.selectOption({ value: '500MB' });

    // Select 500MB
    await dataAllowance.selectOption({ value: '500MB' });
    //10. Assert and choose Starlight from the colour
    const Color = frame.locator('//label[text()="Starlight"]')
    await expect(Color).toBeVisible();
    await Color.check();

    //11.
    const Storage = frame.locator('//label[text()="256 GB [add $100.00]"]')
    await expect(Storage).toBeVisible();
    await Storage.click();

    //12.Click Order now
    await frame.getByRole('button', { name: 'Order Now' }).click();
    await page.waitForTimeout(10000);

    //13.Assert the order status, title and url of the page
    const orderStatusLocator = page.locator('.experience-title')
    await expect(orderStatusLocator).toBeVisible();

    // Read values
    const orderStatus = await orderStatusLocator.innerText();
    const pageTitle = await page.title();
    const pageURL = page.url();

    console.log('Order Status:', orderStatus);
    console.log('Page Title:', pageTitle);
    console.log('Page URL:', pageURL);

    // Assertions
    expect(orderStatus).toContain('REQ');      // Adjust if your page shows a different status
    await expect(page).toHaveURL(/service-now/);
    await expect(page).toHaveTitle(/ServiceNow/);






});