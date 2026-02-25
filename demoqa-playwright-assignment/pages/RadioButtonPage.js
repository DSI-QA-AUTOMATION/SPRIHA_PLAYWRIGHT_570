import { BasePage } from "./base/BasePage";

export class RadioButtonPage extends BasePage {
  constructor(page) {
    super(page);

    this.title = page.locator('h1.text-center');

    //Radio buttons
    this.yesBtn = page.locator('#yesRadio');
    this.impressiveBtn = page.locator('#impressiveRadio');
    this.noBtn = page.locator('#noRadio');

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