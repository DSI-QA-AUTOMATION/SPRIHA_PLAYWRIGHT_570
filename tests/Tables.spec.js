const {test , expect} = require ('@playwright/test');

test ('Handle tables' , async ({page}) => {

    await page.goto ('https://demoqa.com/webtables')
    
    const table = await page.getByRole('grid');

    //total number of columns
    const columns = await table.getByRole('columnheader').filter({ has: page.locator(':visible') });
    console.log('Number of columns:' , await columns.count());

    //total number of rows
    const rows = await table.getByRole('row').filter({ hasText: /\S/ });;
    console.log('Number of rows:' , await rows.count());

    //assert the number of rows and columns
    await expect(columns.nth(0)).toHaveText('First Name');
    await expect(rows.nth(1)).toContainText('Cierra');


    //click on edit button
    const editButton = await rows.filter({has: page.locator('#edit-record-2')})
    await editButton.locator('#edit-record-2').click();

    //assert the modal
    const modal = page.getByRole('dialog')
    await expect(modal).toBeVisible();
    await expect(modal).toContainText('Registration Form');

    //edit any input on the modal
    await modal.locator('#salary').click();
    await modal.locator('#salary').fill('20000');
    await modal.locator('#submit').click();

    //print table details using loop
    const updatedRows = page.locator('.rt-tbody .rt-tr-group');
    for(let i=0; i< await updatedRows.count(); i++){

        const row = updatedRows.nth(i);
        const cells = row.locator('.rt-td').filter({ hasText: /\S/ });

        const cellCount = await cells.count();
        for(let j=0; j< cellCount; j++){
            console.log('Print data:' , await cells.nth(j).textContent());
        }
    }





    await page.waitForTimeout(5000);

})