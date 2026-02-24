import { test, expect } from '@playwright/test';
import { PracticeFormPage } from '../../pages/PracticeFormPage';
import formData from '../../test-data/formData.json';

test('Fill and submit Practice Form', async ({ page }) => {

  const form = new PracticeFormPage(page);
  const user = formData.practiceFormUser;

  await form.gotoPracticeForm();
  await expect(form.modal).not.toBeVisible();

  await form.fillForm(user);

  await form.submitForm();

  await expect(form.modal).toBeVisible();
  await expect(form.modal).toContainText('Thanks for submitting the form');
});