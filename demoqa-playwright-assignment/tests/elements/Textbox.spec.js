import { test } from "@playwright/test";
import { TextboxPage } from "../../pages/TextBoxPage";
const { generateRandomName , generateRandomEmail } = require ('../../utils/testUtils');

test("TC-02: Submit text box with valid data", async ({ page }) => {
  const textBox = new TextboxPage(page);

  await textBox.gotoTextBoxPage();

  const userData = {
    name: generateRandomName(),
    email: generateRandomEmail(),
    currentaddress: "Bangladesh",
    permanentaddress: "Malaysia"
  };

  // Fill the form
  await textBox.fillUpForm(userData);
  await textBox.submitForm();

  //Assert submitted data
  await textBox.verifySubmitForm(userData);
});
