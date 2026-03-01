import { test, expect } from '@playwright/test';
import { LinksPage } from '../../pages/LinksPage';

test('TC-07: Verify link navigation', async ({ page }) => {

  const links = new LinksPage(page);

  await links.gotoLinksPage();

  // Handle new tab link
  const newTab = await links.clickHomeLinkAndCaptureNewTab();
  await expect(newTab).toHaveURL('https://demoqa.com/');
  await newTab.close();

  // API response links
  await links.clickCreated();
  await expect(links.linkResponse).toContainText('201');

  await links.clickNoContent();
  await expect(links.linkResponse).toContainText('204');

});