import { expect } from '@playwright/test';
import { BasePage } from "./base/BasePage";

export class WidgetsPage extends BasePage {
  constructor(page) {
    super(page);

    this.tooltipButton = page.locator('#toolTipButton');
    this.tooltipText = page.locator('.tooltip-inner');
  }

  async gotoToolTipsPage() {
    await this.goto('/tool-tips');
  }

  async hoverOnTooltipButton() {
    await this.tooltipButton.scrollIntoViewIfNeeded();
    await expect(this.tooltipButton).toBeVisible();

    await this.tooltipButton.hover();

    // Wait until tooltip appears
    await expect(this.tooltipText).toBeVisible();
  }
}