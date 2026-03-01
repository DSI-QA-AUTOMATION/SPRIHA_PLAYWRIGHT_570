import { test, expect } from '@playwright/test';
import { DatePickerPage } from '../../pages/DatePickerPage';

test( 'TC-13: Select a date', async ({page})=>{

    const datePage = new DatePickerPage(page);
    await datePage.gotoDatePickerPage();

    await datePage.selectDate('2027', 'January', '14');

    await expect(datePage.dateInput).toHaveValue('01/14/2027');
});