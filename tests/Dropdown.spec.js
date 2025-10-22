const { test, expect } = require('@playwright/test')

test("Handle dropdowns", async ({page})=> {

    await page.goto('https://demoqa.com/select-menu');

    // --- Old Style Select Menu ---
    const selectMenu = page.locator('#oldSelectMenu');
 
    await selectMenu.selectOption({ label: 'Yellow' });     //Select by label

    await selectMenu.selectOption('Indigo');                //Select by visible text (string shortcut)
    
    await selectMenu.selectOption({ value: '10' });         //Select by using value
    
    await selectMenu.selectOption({ index: 1 });            //Select by index
    
    await selectMenu.selectOption('Black');                 //Select by string

    // --- Assertions ---   
    //Check current selected value
    await expect(selectMenu).toHaveValue('5'); 

    //Check number of options
    const options = page.locator('#oldSelectMenu option');
    await expect(options).toHaveCount(11);
    
    const options2 = await page.$$('#oldSelectMenu option');
    console.log("Number of options:",  options2.length)
    await expect(options2.length).toBe(11);

    //Check presence of a particular value
    const arrayOptions = await selectMenu.textContent()
    await expect(arrayOptions.includes('Red')).toBeTruthy();

    //using loop check and verify the presence of an option if there is no select tag
    let status = false;

    for(const option of options2){

        let value = await option.textContent();
        if (value.includes('Indigo')){
            await selectMenu.selectOption(value)
            status = true;
            break;
        }
        //console.log(await option.textContent())
    }

});