const {test , expect }  = require ('@playwright/test')

test("Multi select dropdowns", async ({page})=> {

    await page.goto('https://demoqa.com/select-menu');

    // --- Standard multi select ---
    const selectCar = page.locator('#cars');
 
    await selectCar.selectOption(['Volvo','Audi']);  
    await page.waitForTimeout(3000);

    const count = await page.locator('#cars option')
    await expect(count).toHaveCount(4);


})