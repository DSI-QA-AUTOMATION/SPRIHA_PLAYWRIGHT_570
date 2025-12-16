const {test , expect }  = require ('@playwright/test')

test("Home page test", async ({page})=> {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("//input[@placeholder='Username']").fill('Admin')
    await page.locator("input[placeholder='Password']").fill('admin123')
    await page.locator("button[type='submit']").click()

    await page.locator('.oxd-main-menu-item.active').click()
    await page.locator("//span[normalize-space()='Admin']").click()

    await page.locator(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click()
    await page.locator("//a[normalize-space()='Logout']")


})