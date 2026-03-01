import { expect } from "@playwright/test";
import { BasePage } from "./base/BasePage";

export class TextboxPage extends BasePage {
  constructor(page) {
    super(page);

    this.fullName = page.locator("#userName");
    this.email = page.locator("#userEmail");
    this.currentAdd = page.locator('textarea[placeholder="Current Address"]');
    this.permanentAdd = page.locator("#permanentAddress");
    this.submitBtn = page.locator("#submit");

    // Output section
    this.outputName = page.locator("#output #name");
    this.outputEmail = page.locator("#output #email");

    this.pageHeader = page.locator("h1");
  }

  async gotoTextBoxPage() {
    await this.goto("/text-box");
    await expect(this.pageHeader).toHaveText("Text Box");
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

  async verifySubmitForm(data){
    await expect(this.outputName).toHaveText(`Name:${data.name}`);
    await expect(this.outputEmail).toHaveText(`Email:${data.email}`);
  }
}