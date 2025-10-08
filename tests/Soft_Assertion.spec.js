const { test , expect } = require ('@playwright/test')

test('Soft assertion', async ({page})=>{
    await page.goto('https://demoqa.com/')
    await page.waitForTimeout(3000);

    // Hard assertion
    //await expect(page).toHaveTitle('DEMOQA12');
    //await expect(page).toHaveURL('https://demoqa.com/');
    //await expect(page.locator("img[src='/images/Toolsqa.jpg']")).toBeVisible();

    // Soft assertion
    await expect.soft(page).toHaveTitle('DEMOQA12');
    await expect.soft(page).toHaveURL('https://demoqa.com/');
    await expect.soft(page.locator("img[src='/images/Toolsqa.jpg']")).toBeVisible();


})