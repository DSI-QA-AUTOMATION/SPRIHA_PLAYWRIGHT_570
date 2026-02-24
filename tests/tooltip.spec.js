const { test , expect } = require ('@playwright/test')

test('Soft assertion', async ({page})=>{
    await page.goto('https://demoqa.com/tool-tips')
    await page.waitForTimeout(3000);

    const btn = page.locator('#toolTipButton');
    await btn.hover();

    const tooltip = page.locator('.tooltip-inner');
    await expect(tooltip).toHaveText('You hovered over the Button');


})


test('Handle text field tooltip', async ({ page }) => {
    const widgetsPage = new WidgetsPage(page);
    await widgetsPage.gotoToolTipsPage();

    const text = await widgetsPage.hoverAndGetTooltip(widgetsPage.toolTipInput);
    await expect(text).toBe('You hovered over the text field');
  });

  test('Handle Contrary link tooltip', async ({ page }) => {
    const widgetsPage = new WidgetsPage(page);
    await widgetsPage.gotoToolTipsPage();

    const text = await widgetsPage.hoverAndGetTooltip(widgetsPage.contraryLink);
    await expect(text).toBe('You hovered over the Contrary');
  });

  test('Handle Section link tooltip', async ({ page }) => {
    const widgetsPage = new WidgetsPage(page);
    await widgetsPage.gotoToolTipsPage();

    const text = await widgetsPage.hoverAndGetTooltip(widgetsPage.sectionLink);
    await expect(text).toBe('You hovered over the 1.10.32');
  });