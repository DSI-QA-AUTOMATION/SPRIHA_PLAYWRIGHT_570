import { test, expect } from '@playwright/test';
import { WidgetsPage } from '../../pages/WidgetsPage';

test('TC-12: Verify tooltip', async({page}) => {
    const toolTipPage = new WidgetsPage(page);
    await toolTipPage.gotoToolTipsPage();
 
    await toolTipPage.verifyTooltipIsVisible();

    await expect(toolTipPage.page.locator('.tooltip-inner'))
      .toHaveText('You hovered over the Button');

});