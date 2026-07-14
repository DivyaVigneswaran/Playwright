import { test, expect } from '@playwright/test';

test('Frames', async ({ page }) => {

  // Navigate to the application
  await page.goto('https://leafground.com/frame.xhtml');

  // ----------------------------
  // Frame 1 - Click Me button
  // ----------------------------
  const frame1 = page.frameLocator('iframe[src="default.xhtml"]');

  await frame1.locator('#Click').click();

  await expect(frame1.locator('#Click'))
    .toHaveText('Hurray! You Clicked Me.');

  // ----------------------------
  // Total number of frames
  // ----------------------------
  const frameCount = page.frames().length;
  console.log('Total Frames:', frameCount);

  // ----------------------------
  // Nested Frames
  // ----------------------------
  const outerFrame = page.frameLocator('iframe[src="page.xhtml"]');
  const innerFrame = outerFrame.frameLocator('iframe[src="framebutton.xhtml"]');

  await innerFrame.locator('#Click').click();

  await expect(innerFrame.locator('#Click'))
    .toHaveText('Hurray! You Clicked Me.');
});