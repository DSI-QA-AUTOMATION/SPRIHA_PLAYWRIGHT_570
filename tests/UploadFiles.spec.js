import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/upload-download', {
    waitUntil: 'domcontentloaded'
  })
  

  //await page.waitForSelector('#uploadFile')
  await page.locator('#uploadFile').setInputFiles('tests/Files/testFile.pdf')
  expect(await page.locator('#uploadedFilePath')).toHaveText('C:\\fakepath\\testFile.pdf')

  await page.waitForTimeout(3000)

});