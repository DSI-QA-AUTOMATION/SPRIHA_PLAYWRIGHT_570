const { test , expect } = require ('@playwright/test')

test('Test checkboxes', async ({page})=>{
    await page.goto('https://demoqa.com/checkbox')
    await page.waitForTimeout(3000);

    // Single checkbox
    await page.locator('.rct-title').check();
    await expect(page.locator('.rct-title')).toBeChecked();

    

})