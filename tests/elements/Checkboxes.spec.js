import { test , expect } from '@playwright/test'
import { CheckboxPage } from '../../pages/CheckBoxPage';

test('Test checkboxes', async ({page})=>{

    const checkbox = new CheckboxPage(page);
    await checkbox.gotoCheckBoxPage();
 
    // Check the Home folder
    await checkbox.checkHomeBox();
    await expect(checkbox.homeCheckBox).toBeChecked();

    //Expand Home folder
    await checkbox.expandHome();

    //Assert  sub-checkboxes
    await expect(checkbox.documents).toBeChecked();
    await expect(checkbox.downloads).toBeChecked();
    await expect(checkbox.desktop).toBeChecked();

    // Uncheck the Home folder
    await checkbox.uncheckHomeBox();
    //await expect(checkbox.homeCheckBox).not.toBeChecked();
    await expect(checkbox.homeCheckBox).isChecked().toBeFalsy();

    // Expand the Documents folder
    await checkbox.expandFolder('Documents');
    
    // Expand the Office folder
    await checkbox.expandFolder('Office')

    await checkbox.checkOfficeChildren();

    // Assert Home checkbox
    await expect(checkbox.office).isChecked().toBeTruthy();

})