import { BasePage } from "./base/BasePage";

export class PracticeFormPage extends BasePage {
  constructor(page) {
    super(page);

    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.email = page.locator('#userEmail');

    this.genderFemale = page.getByLabel('Female');

    this.mobile = page.locator('#userNumber');

    this.dobInput = page.locator('#dateOfBirthInput');

    this.subjectInput = page.locator('#subjectsInput');

    this.hobbySports = page.getByLabel('Sports');

    this.uploadPicture = page.locator('#uploadPicture');

    this.currentAddress = page.locator('#currentAddress');

    this.stateDropdown = page.locator('#state');
    this.cityDropdown = page.locator('#city');

    this.submitBtn = page.getByRole('button', { name: 'Submit' });

    this.modal = page.getByRole('dialog');
  }

  async gotoPracticeForm() {
    await this.goto('/automation-practice-form');
  }

  async fillForm(data) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.email.fill(data.email);

    await this.genderFemale.check();

    await this.mobile.fill(data.mobile);

    // Date of Birth
    await this.dobInput.click();
    await this.page.getByRole('option', { name: data.year }).click();
    await this.page.getByRole('option', { name: data.month }).click();
    await this.page.getByRole('gridcell', { name: data.day }).click();

    // Subject
    await this.subjectInput.fill(data.subject);
    await this.page.keyboard.press('Enter');

    // Hobby
    await this.hobbySports.check();

    // Upload file
    const absolutePath = path.resolve(data.filePath);
    await this.uploadPicture.setInputFiles(absolutePath);

    await this.currentAddress.fill(data.address);

    // State & City
    await this.stateDropdown.click();
    await this.page.getByText(data.state, { exact: true }).click();

    await this.cityDropdown.click();
    await this.page.getByText(data.city, { exact: true }).click();
  }

  async submitForm() {
    await this.submitBtn.click();
  }
}