import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  await page.locator('path').first().click();
  await expect(page.getByRole('link')).toBeVisible();

  await page.getByText('Buttons').click();
  await page.getByRole('button', { name: 'Click Me', exact: true }).click();

  await expect(page.locator('#dynamicClickMessage')).toContainText('You have done a dynamic click');
 
  await page.locator('.col-12 > div:nth-child(3)').click();
 
  await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
  await page.getByRole('button', { name: 'Right Click Me' }).click({button: 'right'});

});