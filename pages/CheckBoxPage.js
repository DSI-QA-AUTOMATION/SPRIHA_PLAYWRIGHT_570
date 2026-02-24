import { BasePage } from "./base/BasePage";

export class CheckboxPage extends BasePage {
  constructor(page) {
    super(page);

    //Home checkbox
    this.homeCheckBox = page.getByRole('checkbox', { name: 'Home' })
    this.result = page.locator('#result');

    // Expand the Home folder
    this.toggle = page.locator('(//button[@title="Toggle"])[1]'); 

    this.office = page.getByRole('checkbox', { name: 'Office' });
    this.public = page.getByRole('checkbox', { name: 'Public' });
    this.private = page.getByRole('checkbox', { name: 'Private' });
    this.classified = page.getByRole('checkbox', { name: 'Classified' });
    this.general = page.getByRole('checkbox', { name: 'General' });
  }

  async gotoCheckBoxPage() {
    await this.goto("/checkbox");
  }

  async checkHomeBox() {
    await this.homeCheckBox.check();
  }

  async uncheckHomeBox() {
    await this.homeCheckBox.uncheck();
  }

  async expandHome() {
    await this.toggle.click();
  }

  async expandFolder(name) {
    await this.page.locator('div[role="treeitem"]', { hasText: name }).locator('.rc-tree-switcher').click();
}

  async checkOfficeChildren() {
    await this.public.check();
    await this.private.check();
    await this.classified.check();
    await this.general.check();
  }
}