import { test, expect } from '@playwright/test';
import { UploadDownloadPage } from "../../pages/UploadDownloadPage";

test('test', async ({ page }) => {

  const uploadPage = new UploadDownloadPage(page);

  await uploadPage.gotoUploadDownloadPage();

  await uploadPage.uploadFile('tests/Files/testFile.pdf')
  
  //await page.waitForSelector('#uploadFile')
  await page.locator('#uploadFile').setInputFiles('tests/Files/testFile.pdf')
  await expect(uploadPage.uploadedFilePath).toHaveText('C:\\fakepath\\testFile.pdf')

});