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

  async fillUpForm(user){
    await this.fullName.fill(user.fullname);
    await this.email.fill(user.email);
    await this.currentAdd.fill(user.currentaddress);
    await this.permanentAdd.fill(user.permanentaddress);
  }

  async submitForm(){
    await this.submitBtn.click();
  }
}