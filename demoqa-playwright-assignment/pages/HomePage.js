import { expect } from "@playwright/test";
import { BasePage } from "./base/BasePage";

export class HomePage extends BasePage {
  constructor(page) {
    super(page);

    this.elementsCard = page.locator("//h5[text()='Elements']")
    this.formsCard = page.locator("//h5[text()='Forms']");
    this.alertsCard = page.locator("//h5[text()='Alerts, Frame & Windows']");
    this.widgetsCard = page.locator("//h5[text()='Widgets']");
    this.interactionsCard = page.locator("//h5[text()='Interactions']");
    this.bookStoreCard = page.locator("//h5[text()='Book Store Application']");
  }

  async gotoDemoQAPage() {
    await this.goto('/');
  }

  async verifyAllCategoriesVisible() {
    await expect(this.elementsCard).toBeVisible();
    await expect(this.formsCard).toBeVisible();
    await expect(this.alertsCard).toBeVisible();
    await expect(this.widgetsCard).toBeVisible();
    await expect(this.interactionsCard).toBeVisible();
    await expect(this.bookStoreCard).toBeVisible();
  }

  async clickBookStoreCard(){
    await this.bookStoreCard.click();
  }
}
