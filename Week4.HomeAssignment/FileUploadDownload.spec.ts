import {test} from '@playwright/test'
import path from 'path';
test('File Download', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/download');
    const down = page.waitForEvent("download");
    await page.locator('//a[text()="LambdaTest.txt"]').click();
    const fDown = await down;
    (await down).saveAs(path.join(__dirname,"../../Data/File.txt"));
})

test('File Upload', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/upload');
    const UP = page.waitForEvent("filechooser")
    await page.locator('[id="drag-drop-upload"]').click();
    const fUP = await UP;
   fUP.setFiles(path.join(__dirname,"../../Data/AbsolutePath.png"))
});