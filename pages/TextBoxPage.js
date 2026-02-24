import { BasePage } from "./base/BasePage";

export class TextboxPage extends BasePage {
  constructor(page) {
    super(page);

    this.fullName = page.locator("#userName");
    this.email = page.locator("#userEmail");
    this.currentAdd = page.locator('textarea[placeholder="Current Address"]');
    this.permanentAdd = page.locator("#permanentAddress");
    this.submitBtn = page.locator("#submit");
  }

  async gotoLoginPage() {
    await this.goto("/text-box");
    await this.waitUntilVisible("#userName");
  }

  async fillUpForm(data){
    await this.fullName.fill(data.name);
    await this.email.fill(data.email);
    await this.currentAdd.fill(data.currentaddress);
    await this.permanentAdd.fill(data.permanentaddress);
  }

  async submitForm(){
    await this.submitBtn.click();
  }
}