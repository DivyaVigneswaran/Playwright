import {expect, test} from '@playwright/test'

test('Validate Check Box', async({page}) => {
    await page.goto("https://leafground.com/checkbox.xhtml")
    //Basic Checkbox
    await page.locator('(//div[contains(@class,"ui-chkbox-box ui-widget ui-corner-all ui-state-default")])[1]').click();
    //Notification
    await page.locator('(//div[contains(@class,"ui-chkbox-box ui-widget ui-corner-all ui-state-default")])[2]').click();
    
    //Checked Message 
    const message = await page.locator('//span[text()="Checked"]');
    await expect(message).toBeVisible();

    //Choose Favourite Language
    await page.locator('(//div[contains(@class,"ui-chkbox-box ui-widget ui-corner-all ui-state-default")])[3]').click();

    //Tri State Checkbox
    await page.locator('(//div[contains(@class,"ui-chkbox-box ui-widget ui-corner-all ui-state-default")])[8]').click();
    // Tri State Message
    const TriStateMsG = await page.locator('//span[text()="State has been changed."]').innerText();
    console.log(TriStateMsG);
    //Tri State Number
    const TriState = await page.locator('//div[@class="ui-growl-message"]/p[contains(text(),"State")]').innerText();
    console.log(TriState);
    
    //Toggle Switch
    await page.locator('//div[@class="ui-toggleswitch ui-widget"]').click();
    const ToggleMsg = await page.locator('//span[text()="Checked"]').innerText();
    console.log(ToggleMsg);

    //Disabled Checkbox
    //await expect(page.locator('//div[@class="ui-chkbox-box ui-widget ui-corner-all ui-state-default ui-state-disabled ui-state-disabled"]')).toBeEnabled();
    await expect(page.getByLabel("Disabled")).toBeDisabled();

    //Multiple Select
    await page.locator('(//ul[@class="ui-selectcheckboxmenu-multiple-container ui-widget ui-inputfield ui-state-default ui-corner-all"])').click();
    await page.locator('(//label[text()="Miami"])[2]').click();
    await page.locator('(//label[text()="London"])[2]').click();
    await page.locator('(//label[text()="Paris"])[2]').click();
    
   //Close the browser
   page.close();






})