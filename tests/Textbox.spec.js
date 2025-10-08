import { test, expect } from '@playwright/test';
//const { test , expect } = require ('@playwright/test')


test('Fill Text Box form and assert submitted values', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box')
    await expect(page).toHaveURL('https://demoqa.com/text-box');
    //await page.waitForTimeout(3000);
   
    //Assert the title
    const pageTitle = page.locator('//h1[text()="Text Box"]')
    await expect(pageTitle).toHaveText('Text Box');
   
    // Fill the form
    const fullName = page.locator('#userName')
    const email = page.locator('//input[@id="userEmail"]')
    const currentAdd = page.locator('//textarea[@placeholder="Current Address"]')
    const permanentAdd = page.locator('//textarea[@id="permanentAddress"]')

    await fullName.fill('Jude')
    await email.fill('jude@gmail.com')
    await currentAdd.fill('Dhaka')
    await permanentAdd.fill('Cumilla')

    //Assert the placeholder
    await expect(fullName).toHaveAttribute('placeholder','Full Name')

    //Click on Submit
    await page.click('//button[@id="submit"]')

    //Assert submitted data
    await expect(page.locator('#output #name')).toHaveText('Name:Jude')
    await expect(page.locator('#output #email')).toHaveText('Email:jude@gmail.com')
});