const {test , expect} = require('@playwright/test')

test('Drag and drop', async ({page})=>{

    await page.goto('https://demoqa.com/droppable')

    //simple drag and drop
    const drag = await page.locator('#draggable');
    const drop = await page.locator("(//div[@id='droppable'])[1]");

    await drag.dragTo(drop);

    await expect(drop).toHaveText('Dropped!') 

    //accept drag and drop
    await page.locator('#droppableExample-tab-accept').click();

    const notAcceptDrag = await page.locator('#notAcceptable')
    const dropBox = await page.locator("(//div[@id='droppable'])[2]")

    await notAcceptDrag.hover();
    await page.mouse.down();

    await dropBox.hover();
    await page.mouse.up();

    await page.waitForTimeout(3000);


})