const { test , expect} = require ('@playwright/test')

test('Mouse hover actions', async({page}) => {

    await page.goto('https://www.ryans.com/');

    const laptop = await page.locator("//button[normalize-space()='Laptop']");
    const apple = await page.locator('nav a[href*="all-laptop-apple"]');

    await laptop.hover();
    await apple.hover();

    await page.waitForTimeout(5000);
})