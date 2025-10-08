const { test , expect } = require ('@playwright/test')

test('Builtin locators', async ({page})=>{
    await page.goto('https://demoqa.com/automation-practice-form')
    await page.waitForTimeout(3000);

    await expect(page).toHaveURL('https://demoqa.com/automation-practice-form')

    await expect(page).toHaveTitle('DEMOQA')

    const heading = page.getByRole('heading', { name: 'Student Registration Form' })
    await expect(heading).toBeVisible();

    const femaleOption = page.getByText('Female')
    await femaleOption.click();
    await expect(femaleOption).toBeChecked();

    const name = await page.locator('#firstName')
    await expect(name).toBeEnabled()

    const submitbtn = await page.locator("//button[@id='submit']")
    await expect(submitbtn).toHaveAttribute('type','submit')

    const phoneInput = await page.locator("#userNumber")
    await expect(phoneInput).toHaveClass(' mr-sm-2 form-control')

    const text = await page.locator("//h5[normalize-space()='Student Registration Form']")
    await expect(text).toHaveText('Student Registration Form')
    await expect(text).toContainText('Student')

    //const countOption = await page.locator('div.css-1wa3eu0-placeholder')
    //await expect(countOption).toHaveCount(4)




});