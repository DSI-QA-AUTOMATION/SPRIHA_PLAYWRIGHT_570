const {test , expect }  = require ('@playwright/test')

test("Hidden dropdowns", async ({page})=> {

    await page.goto('https://demoqa.com/select-menu');

    // --- Multiselect drop down ---
    //click on the dropdown
    await page.locator('//*[@id="selectMenuContainer"]/div[7]/div/div/div/div[2]/div').click();
 
    await page.waitForTimeout(3000);

    const options = await page.$$("//div[@class=' css-11unzgr']//div")
    for(let option of options){
        const colors = await option.textContent()
        //console.log("The options are:" , colors)
        if(colors.includes('Blue')){
            await option.click();
            await page.waitForTimeout(3000);
            break;
        }
    }


})