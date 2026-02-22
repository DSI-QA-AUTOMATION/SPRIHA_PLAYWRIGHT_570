import { BasePage } from "./base/BasePage";

export class CheckboxPage extends BasePage {
  constructor(page) {
    super(page);

    //Home checkbox
    this.homeCheckBox = page.locator("#tree-node-home");
    this.homeLabel = page.locator('label[for="tree-node-home"]');

    // Expand the Home folder
    this.toggle = page.locator('(//button[@title="Toggle"])[1]'); 
  
    this.documents = page.locator('#tree-node-documents');
    this.downloads = page.locator('#tree-node-downloads');
    this.desktop = page.locator('#tree-node-desktop');  

    this.office = page.locator('#tree-node-office');
    this.public = page.locator('#tree-node-public');
    this.private = page.locator('#tree-node-private');
    this.classified = page.locator('#tree-node-classified');
    this.general = page.locator('#tree-node-general');
  }

  async gotoCheckBoxPage() {
    await this.goto("/checkbox");
  }

  async checkHomeBox() {
    await this.homeLabel.check();
  }

  async uncheckHomeBox() {
    await this.homeLabel.uncheck();
  }

  async expandHome() {
    await this.toggle.click();
  }

  async expandFolder(folderName) {
    await this.page
      .locator(`label:has-text("${folderName}")`)
      .locator('..')
      .locator('button[title="Toggle"]')
      .click();
  }

  async checkOfficeChildren() {
    await this.public.check();
    await this.private.check();
    await this.classified.check();
    await this.general.check();
  }
}