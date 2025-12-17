const { test , expect} = require ('@playwright/test')

test('Mouse click actions', async({page}) => {

    await page.goto('https://demoqa.com/buttons');

    const rightClick = await page.locator("#rightClickBtn");
    const doubleClick = await page.locator('#doubleClickBtn');
    const dynamicClick = await page.locator("//button[text()='Click Me']");

    await rightClick.click({button: 'right'});      //right click
    await doubleClick.dblclick();  //double click
    await dynamicClick.click();                           //dynamic click

    await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click');

    await page.waitForTimeout(3000);
})