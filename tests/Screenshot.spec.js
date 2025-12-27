import {test , require} from '@playwright/test'

test('Page screenshot' , async ({page}) => {
    await page.goto('https://demoqa.com/')
    await page.screenshot({path: 'tests/Screenshots/' + Date.now() + 'Homepage.png'})
});

test('Full page screenshot' , async ({page}) => {
    await page.goto('https://demoqa.com/')
    await page.screenshot({path: 'tests/Screenshots/' + Date.now() + 'Fullpage.png' , fullPage: true})
});

test.only('Element screenshot' , async ({page}) => {
    await page.goto('https://demoqa.com/')
    await page.locator("//img[@alt='Selenium Online Training']").screenshot({path: 'tests/Screenshots/' + Date.now() + 'Selenium.png'})
});