import { test, expect } from '@playwright/test';
import { WidgetsPage } from '../../pages/WidgetsPage';

test.describe('DemoQA Tooltips Validation', () => {

  let toolTipPage;

  test.beforeEach(async ({ page }) => {
    toolTipPage = new WidgetsPage(page);
    await toolTipPage.gotoToolTipsPage();
  });

  test('Handle button tooltip', async () => {

    await toolTipPage.toolTipBtn.hover();

    await expect(toolTipPage.toolTip)
      .toBeVisible({ timeout: 5000 });

    await expect(toolTipPage.toolTip)
      .toHaveText('You hovered over the Button');
  });

});