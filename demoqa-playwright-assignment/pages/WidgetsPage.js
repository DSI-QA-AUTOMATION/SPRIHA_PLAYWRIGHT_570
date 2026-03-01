import { expect } from '@playwright/test';
import { BasePage } from "./base/BasePage";

export class WidgetsPage extends BasePage {
  constructor(page) {
    super(page);

    this.toolTipBtn = page.locator("#toolTipButton");
    this.tooltip = this.page.locator('.tooltip-inner');
  }

  async gotoToolTipsPage() {
    await this.goto("/tool-tips");
  }

  async verifyTooltipIsVisible() {
    await this.toolTipBtn.scrollIntoViewIfNeeded();
    await expect(this.toolTipBtn).toBeVisible();
    await this.toolTipBtn.hover();

    const box = await this.toolTipBtn.boundingBox();
    await this.page.mouse.move(
    box.x + box.width / 2,
    box.y + box.height / 2
    );
  }
}
