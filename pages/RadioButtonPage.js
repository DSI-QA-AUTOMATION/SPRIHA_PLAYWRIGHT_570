import { BasePage } from "./base/BasePage";

export class RadioButtonPage extends BasePage {
  constructor(page) {
    super(page);

    this.title = page.locator('h1.text-center');

    //Radio buttons
    this.yesBtn = page.getByLabel('Yes');
    this.impressiveBtn = page.getByLabel('Impressive');
    this.noBtn = page.page.getByLabel('No');

    // Result text
    this.resultText = page.locator('.text-success');
  }

  async gotoRadioPage() {
    await this.goto("/radio-button");
  }

  async selectYes() {
    await this.yesBtn.check();
  }

  async selectImpressive() {
    await this.impressiveBtn.check();
  }
}