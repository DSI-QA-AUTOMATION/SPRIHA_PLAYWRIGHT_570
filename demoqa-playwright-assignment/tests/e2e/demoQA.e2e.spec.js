import { test, expect } from "@playwright/test";
import { BasePage } from "../../pages/base/BasePage";
import { PracticeFormPage } from "../../pages/PracticeFormPage";
import { WidgetsPage } from "../../pages/WidgetsPage";
import { DatePickerPage } from "../../pages/DatePickerPage";
import { InteractionsPage } from "../../pages/InteractionsPage";
import formData from "../../test-data/formData.json";

test("TC-15: Complete user journey", async ({ page }) => {
  const basePage = new BasePage(page);
  const practiceForm = new PracticeFormPage(page);
  const widgets = new WidgetsPage(page);
  const datePicker = new DatePickerPage(page);
  const interactions = new InteractionsPage(page);
  const user = formData.practiceFormUser;
  
  //Go to home page
  await basePage.goto();

  //Practice form
  await practiceForm.gotoPracticeForm();
  await practiceForm.fillForm(user);
  await practiceForm.submitForm();
  await expect(practiceForm.modal).toContainText("Thanks for submitting the form");

  //Tooltips
  await widgets.gotoToolTipsPage();
  await widgets.verifyTooltipIsVisible();
  await expect(widgets.page.locator('.tooltip-inner')).toHaveText('You hovered over the Button');

  //Date picker
  await datePicker.gotoDatePickerPage();
  await datePicker.selectDate('2027', 'January', '14');
  await expect(datePicker.dateInput).toHaveValue('01/14/2027');

  //Drag and drop
  await interactions.gotoDragAnDropPage();
  await interactions.gotoDragAnDropPage();
  await interactions.simpleDragAndDrop();
  await expect(interactions.simpleDropBox).toHaveText("Dropped!", { timeout: 5000 });
  
});
