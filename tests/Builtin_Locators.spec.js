const { test , expect } = require ('@playwright/test')

test('Builtin locators', async ({page})=>{
    await page.goto('https://demoqa.com/text-box')
    await page.waitForTimeout(3000);

    // to locate an input by placeholder
    await page.getByPlaceholder('Full Name').fill('John')
    await page.getByPlaceholder('name@example.com').fill('test@gmail.com')
    await page.getByPlaceholder('Current Address').fill('Bangladesh')

    // to locate by explicit and implicit accessibility attributes
    await page.getByRole('button', {id: 'submit'}).click();

    // to locate by text content
    const title = await page.locator('//h1[@class="text-center"]').textContent()
    await expect(await page.getByText(title)).toBeVisible()

    // to locate a form control by associated label's text
    await page.getByLabel('Full Name').fill('Jenny')
    await page.getByLabel('Permanent Address').fill('London')

    // to locate an element by its title attribute


})