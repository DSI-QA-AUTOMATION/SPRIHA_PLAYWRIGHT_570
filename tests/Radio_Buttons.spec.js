const { test , expect } = require ('@playwright/test')

test('Test Radio Buttons', async ({page})=>{
    await page.goto('https://demoqa.com/radio-button')
    await page.waitForTimeout(3000);

    await expect(page.locator('//h1[@class="text-center"]')).toBeVisible();

    await page.locator('label', { hasText: 'Yes' }).click();
    await expect(page.locator('//span[@class="text-success"]')).toHaveText('Yes')

    await page.locator('label', { hasText: 'Impressive' }).click();
    await expect(page.locator('//span[@class="text-success"]')).toHaveText('Impressive');

    await expect(page.locator('label', { hasText: 'No' })).toBeDisabled();
    await expect(page.locator('label', { hasText: 'No' })).not.toBeChecked();

})