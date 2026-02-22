import { test, expect } from '@playwright/test';
import { PracticeFormPage } from '../../pages/PracticeFormPage';

test('Fill and submit Practice Form', async ({ page }) => {

  const form = new PracticeFormPage(page);

  await form.gotoPracticeForm();

  await form.fillForm({
    firstName: 'Spriha',
    lastName: 'Zannat',
    email: 'spriha@test.com',
    mobile: '01712345678',
    year: '1995',
    month: 'March',
    day: '15',
    subject: 'Maths',
    filePath: 'tests/Files/testFile.pdf',
    address: 'Dhaka, Bangladesh',
    state: 'NCR',
    city: 'Delhi'
  });

  await form.submitForm();

  await expect(form.modal).toBeVisible();
  await expect(form.modal).toContainText('Thanks for submitting the form');
});