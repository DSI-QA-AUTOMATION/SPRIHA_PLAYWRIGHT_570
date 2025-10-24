const { test , expect} = require ('@playwright/test')

test( 'Handle alerts', async ({page})=>{
    await page.goto('https://demoqa.com/alerts');

    //enabling alert handling
    page.on('dialog', async dialog => {  
        
        //type of the alert
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('You clicked a button')
        await dialog.accept();                  //close by using OK button
     })

     await page.click('#alertButton')
     await page.waitForTimeout(3000);
});

test( 'Handle timer alerts', async ({page})=>{
    await page.goto('https://demoqa.com/alerts');

    //enabling alert handling
    page.on('dialog', async dialog => {  
        
        //type of the alert
        expect(dialog.type()).toContain('timer')
        expect(dialog.message()).toContain('This alert appeared after 5 seconds')
        await dialog.accept();                  
     })

     await page.click('#timerAlertButton')
     await page.waitForTimeout(3000);
});


test( 'Handle alerts with confirmation', async ({page})=>{
    await page.goto('https://demoqa.com/alerts');

    //enabling alert handling
    page.on('dialog', async dialog => {  
        
        //type of the alert
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Do you confirm action?')
        await dialog.dismiss();             //close by using CANCEL button
     })

     await page.click('#confirmButton')

     await expect(page.locator('#confirmResult')).toHaveText("You selected Cancel")

     await page.waitForTimeout(3000);
});

test( 'Promt dialog', async ({page})=>{
    await page.goto('https://demoqa.com/alerts');

    //enabling alert handling
    page.on('dialog', async dialog => {  
        
        //type of the alert
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name')
        //expect(dialog.defaultValue()).toContain('Default value');             //if there is any default input 
        await dialog.accept('Spriha');             
     })

     await page.click('#promtButton')

     await expect(page.locator('#promptResult')).toHaveText("You entered Spriha")

     await page.waitForTimeout(3000);
});
