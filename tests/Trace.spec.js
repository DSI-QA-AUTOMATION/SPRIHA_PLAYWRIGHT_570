import { test, expect } from '@playwright/test';
//const { test , expect } = require ('@playwright/test')


test('Fill Text Box form and assert submitted values', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box')
   
    // Fill the form
    const fullName = page.locator('#userName')
    const email = page.locator('//input[@id="userEmail"]')
    const currentAdd = page.locator('//textarea[@placeholder="Current Address"]')
    const permanentAdd = page.locator('//textarea[@id="permanentAddress"]')

    await fullName.fill('Jude')
    await email.fill('jude@gmail.com')
    await currentAdd.fill('Dhaka')
    await permanentAdd.fill('Cumilla')
    await page.click('//button[@id="submit"]')
    await expect(page.locator('#output #name')).toHaveText('Name:Jude')
});


//npx playwright show-trace test-results\Trace-Fill-Text-Box-form-and-assert-submitted-values-chromium\trace.zip