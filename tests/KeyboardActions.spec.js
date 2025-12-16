const {test , expect }  = require ('@playwright/test')

test("Keyboard actions", async ({page})=> {

    await page.goto('https://gotranscript.com/text-compare');

    await page.locator('[name="text1"]').fill("Welcome to my world");

    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    await page.keyboard.press('Control+V')
    await page.keyboard.press('Control+Z')
 
    await page.waitForTimeout(3000);

})