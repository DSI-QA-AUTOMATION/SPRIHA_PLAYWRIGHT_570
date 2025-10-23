const {test , expect }  = require ('@playwright/test')

test("Bootstrap dropdowns", async ({page})=> {

    await page.goto('https://www.automationtestinginsider.com/2019/12/bootstrap-dropdown-example_12.html');

    const dropdownButton = page.locator('#bootstrapmenu');
    await dropdownButton.click();
 
    const options = await page.locator(".dropdown-menu>li a");
    await expect(options).toHaveCount(4);

    const selectOptions = await page.$$(".dropdown-menu>li a");
    for(let option of selectOptions){
        const value = await option.textContent();
        console.log(value);
        if(value.includes('HOME')){
            await option.click();
            break;
        }
    }

    await page.waitForTimeout(3000);
    


})