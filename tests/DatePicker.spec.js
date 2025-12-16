const { test , expect} = require ('@playwright/test')

test( 'Handle date picker', async ({page})=>{
    await page.goto('https://demoqa.com/date-picker');

    //await page.fill('#datePickerMonthYearInput', '12/02/2025')
    

    const year = '2026'
    const month = 'January'
    const date = '14'

    await page.click('#datePickerMonthYearInput')

    while(true)
    {
        const currentDate = await page.locator('.react-datepicker__current-month.react-datepicker__current-month--hasYearDropdown.react-datepicker__current-month--hasMonthDropdown').textContent();
        if(currentDate.trim() === `${month} ${year}`){
            break;
        }

        await page.locator("button[aria-label='Next Month']").click();
    
    }

    const dates = await page.$$('.react-datepicker__day')

    for(const dt of dates){
        if(await dt.textContent() == date){
            await dt.click();
            break;
        }
    }



    await page.waitForTimeout(3000);
});