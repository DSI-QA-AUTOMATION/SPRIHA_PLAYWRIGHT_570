import { test , expect } from '@playwright/test'
import { CheckboxPage } from '../../pages/CheckBoxPage';

test('TC-03: Select multiple checkboxes', async ({page})=>{

    const checkbox = new CheckboxPage(page);
    await checkbox.gotoCheckBoxPage();
 
    // Check the Home folder
    await checkbox.checkHomeBox();
    await expect(checkbox.homeCheckBox).toBeChecked();

    //Assert  sub-checkboxes
    await expect(checkbox.result).toContainText('desktop');
    await expect(checkbox.result).toContainText('documents');
    await expect(checkbox.result).toContainText('downloads');

    await checkbox.expandFolder('Home');
    await checkbox.expandFolder('Documents');
    await checkbox.expandFolder('Office');

    await checkbox.checkOfficeChildren();
    await expect(checkbox.office).toBeChecked();

    // Uncheck the Home folder
    await checkbox.uncheckHomeBox();
    await expect(checkbox.homeCheckBox).not.toBeChecked();
})