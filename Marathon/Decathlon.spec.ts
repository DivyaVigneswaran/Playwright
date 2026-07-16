import { test, expect } from '@playwright/test'
test('Decathlon', async ({ page }) => {
    //Launch Browser
    await page.goto("https://www.decathlon.in/");

    //7.Search
    const Search = await expect(page.locator('[type="search"]')).toBeEnabled();
    await page.locator('[type="search"]').click();
    const searchBox = await page.getByPlaceholder('Search for 60+ sports and 6,000+ products');
    await expect(searchBox).toBeEnabled();
    // Click search box
    await searchBox.click();
    // Enter product name
    await searchBox.fill('Shoes');
    // Press Enter
    await searchBox.press('Enter');

    //8. print the page title in the console
    const Title = await page.title()
    console.log(Title);

    //9.Verify the page title is displayed as "Search | shoes"
    await expect(page).toHaveTitle("Search | Shoes");
    await page.waitForLoadState("domcontentloaded");

    //10.Click on the "Running" category filter
    /* //const Sport = page.getByText('Sport', { exact: true});
    const Sport = page.locator('//span[text()="Sport"]');
    await expect(Sport).toBeVisible();
    await Sport.click();
    await page.locator('//span[text()="Running"]').last().click();  */

    //11. Click on the "Gender" category filter
    await page.getByRole('button', { name: 'Gender' }).click({ force: true });
    await page.locator('//span[text()="Men"]').last().click();

    //12.Click on the shoe size filter "UK 10.5"
    await page.getByRole('button', { name: 'Size' }).click();
    await page.locator('//span[text()="10.5"]').click();

    //13. Click on Sort Option
    await page.getByRole('button', { name: 'Most relevant' }).click();

    //14. Select the sorting option "Price: High to Low"
    await page.getByRole('option', { name: 'Price (high → low)' }).click();

    //15. Click on the first product from the displayed product list
    await page.getByRole('link', { name: "Simond Men's Leather Boots Waterproof Vibram MT500 Brown" }).click();

    //16. Select the shoe size "UK 10.5 - EU 45" on the product detail page
    await page.getByRole('button', { name: "Select size 10.5" }).click();

    //17. Click on the "Add to Cart" button
    await page.getByRole('button', { name: "Add to cart" }).click();

    //18. Click on Cart Button
    await page.getByRole('link', { name: "Cart" }).click();

    //19. Fetch the total cart value
    const Total = await page.locator('[data-test-id="cart:cart-checkout-total-cart-value"]').last().innerText();
    //const Total = await page.locator('[data-test-id="order-summary-item-container"]').last().innerText();

    //20. Print the value
    console.log("Total cart amount :", Total);

});