import { test, expect } from '@playwright/test';
import { WidgetsPage } from '../../pages/WidgetsPage';

test( 'Handle date picker', async ({page})=>{

    const widgetsPage = new WidgetsPage(page);
    await widgetsPage.gotoDatePickerPage();

    await widgetsPage.selectDate('2027', 'January', '14');

    await expect(widgetsPage.dateInput).toHaveValue('01/14/2027');
});