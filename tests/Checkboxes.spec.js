const { test , expect } = require ('@playwright/test')

test('Test checkboxes', async ({page})=>{
    await page.goto('https://demoqa.com/checkbox')


    // Check the Home folder
    await page.locator('label[for="tree-node-home"]').check();
    await expect(page.locator('#tree-node-home')).toBeChecked();

    // Expand the Home folder
    await page.locator('(//button[@title="Toggle"])[1]').click();

    // Assert sub-checkboxes
    await expect(page.locator('#tree-node-documents')).toBeChecked();
    await expect(page.locator('#tree-node-downloads')).toBeChecked();
    await expect(page.locator('#tree-node-desktop')).toBeChecked();

    // Uncheck the Home folder
    await page.locator('label[for="tree-node-home"]').uncheck();
    await expect(page.locator('#tree-node-home')).not.toBeChecked();


    // Expand the Documents folder
    await page.locator('label:has-text("Documents")').locator('..').locator('button[title="Toggle"]').click();
    
    // Expand the Office folder
    await page.locator('label:has-text("Office")').locator('..').locator('button[title="Toggle"]').click();

    await page.locator('label[for="tree-node-public"]').check();
    await page.locator('label[for="tree-node-private"]').check();
    await page.locator('label[for="tree-node-classified"]').check();
    await page.locator('label[for="tree-node-general"]').check();

    // Assert Home checkbox
    await expect(page.locator('#tree-node-office')).toBeChecked();


})