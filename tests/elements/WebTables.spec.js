import {test , expect} from '@playwright/test';
import { WebTablePage } from '../../pages/WebTablePage';

test ('Handle tables' , async ({page}) => {

    const webTable = new WebTablePage(page);
    await webTable.gotoWebTablePage();

    //assert the number of rows and columns
    const columnCount = await webTable.getColumnCount();
    console.log('Number of columns:', columnCount);
    await expect(webTable.columns.nth(0)).toHaveText('First Name');

    const rowCount = await webTable.getRowCount();
    console.log('Number of rows:', rowCount);
    await expect(webTable.rows.nth(0)).toContainText('Cierra');
    
    //click on edit button
    await webTable.clickEditByRowId(2)
    await expect(webTable.modal).toBeVisible();
    await expect(webTable.modal).toContainText('Registration Form');

    //edit any input on the modal
    await webTable.updateSalary('20000');

    //Print table
    await webTable.printTableData();

})