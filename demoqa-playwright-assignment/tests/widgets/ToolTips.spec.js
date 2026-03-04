import { test, expect } from '@playwright/test';
import { WidgetsPage } from '../../pages/WidgetsPage';

test('TC-12: Verify tooltip', async ({ page }) => {

  const widgetsPage = new WidgetsPage(page);

  await widgetsPage.gotoToolTipsPage();

  await widgetsPage.hoverOnTooltipButton();

  await expect(widgetsPage.tooltipText)
    .toHaveText('You hovered over the Button');

});