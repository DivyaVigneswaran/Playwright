import { test, chromium, firefox } from '@playwright/test';

test('Basic Navigation', async () => {

    // Launch Chromium 
    const browser1 = await chromium.launch({headless: false });

    const page1 = await browser1.newPage();

    await page1.goto('https://www.redbus.in');

    console.log(await page1.title());
    console.log(page1.url());

    // Launch Firefox
    const browser2 = await firefox.launch({headless: false});

    const page2 = await browser2.newPage();

    await page2.goto('https://www.flipkart.com');

    console.log(await page2.title());
    console.log(page2.url());

    // Close both browsers
    await browser1.close();
    await browser2.close();
});