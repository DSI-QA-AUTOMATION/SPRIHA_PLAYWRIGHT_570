const {test , expect }  = require ('@playwright/test')

let page;

test.beforeAll(async({browser}) => { 
    page = await browser.newPage()
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //Login
    await page.locator("//input[@placeholder='Username']").fill('Admin')
    await page.locator("input[placeholder='Password']").fill('admin123')
    await page.locator("button[type='submit']").click()

});

test.afterAll(async() => {
   //Logout
    await page.locator(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click()
    await page.locator("//a[normalize-space()='Logout']").click()

});

test("Home page test", async ()=> {
    //Home page
    await page.locator('.oxd-main-menu-item.active').click()
    await page.locator("//span[normalize-space()='Admin']").click()

})

test("Update info", async ()=> {
    //Update info
    await page.locator('//span[normalize-space()="My Info"]').click()
    await page.locator("input[placeholder='First Name']").fill("Gul A Zannat")
    await page.locator("input[placeholder='Last Name']").fill("Spriha")
    await page.locator("(//button[@type='submit'][normalize-space()='Save'])[1]").click()

})