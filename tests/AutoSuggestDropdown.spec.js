const {test , expect }  = require ('@playwright/test')

test("Auto suggest dropdowns", async ({page})=> {

    await page.goto('https://www.google.com/');

    await page.locator('textarea[name="q"]').fill('Playwright');
    await page.waitForSelector("//li[contains(@class,'sbct')]");

    const options = await page.locator("//li[contains(@class,'sbct')]//span").allTextContents();
    for(let option of options){
        const text = option.trim();
        if(text){
            console.log(text);
        }
    }
    await page.waitForTimeout(3000);

})