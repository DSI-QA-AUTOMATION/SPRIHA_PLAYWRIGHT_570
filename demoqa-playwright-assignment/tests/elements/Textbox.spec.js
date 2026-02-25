import { test, expect } from "@playwright/test";
import { TextboxPage } from "../../pages/TextBoxPage";
const { generateRandomName , generateRandomEmail } = require ('../../utils/testUtils')

test("Fill Text Box form and assert submitted values", async ({ page }) => {
  const form = new TextboxPage(page);

  await form.gotoLoginPage();
  await expect(page).toHaveURL("https://demoqa.com/text-box");

  //Assert the title
  const pageTitle = page.locator('//h1[text()="Text Box"]');
  await expect(pageTitle).toHaveText("Text Box");

  //Assert the placeholder
  await expect(form.fullName).toHaveAttribute("placeholder", "Full Name");

  const userData = {
    name: generateRandomName(),
    email: generateRandomEmail(),
    currentaddress: "Bangladesh",
    permanentaddress: "Malaysia"
  };

  // Fill the form
  await form.fillUpForm(userData);
  await form.submitForm();

  //Assert submitted data
  await expect(page.locator("#output #name")).toHaveText(`Name:${userData.name}`);
  await expect(page.locator("#output #email")).toHaveText(`Email:${userData.email}`);
});
