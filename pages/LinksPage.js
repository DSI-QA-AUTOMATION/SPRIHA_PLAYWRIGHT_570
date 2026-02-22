import { BasePage } from "./base/BasePage";

export class LinksPage extends BasePage {
  constructor(page) {
    super(page);

    // Simple link (opens new tab)
    this.homeLink = page.getByRole('link', { name: 'Home' });

    // API response links
    this.createdLink = page.locator('#created');
    this.noContentLink = page.locator('#no-content');
    this.movedLink = page.locator('#moved');

    // Response message
    this.linkResponse = page.locator('#linkResponse');
  }

  async gotoLinksPage() {
    await this.goto('/links');
  }

  async clickHomeLinkAndCaptureNewTab() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.homeLink.click()
    ]);

    await newPage.waitForLoadState();
    return newPage;
  }

  async clickCreated() {
    await this.createdLink.click();
  }

  async clickNoContent() {
    await this.noContentLink.click();
  }

  async clickMoved() {
    await this.movedLink.click();
  }

  async getResponseText() {
    return await this.linkResponse.textContent();
  }
}