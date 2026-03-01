import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test.describe('Home Page', () => {

  test('TC-01: Verify all main categories are visible', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.gotoDemoQAPage();
    await homePage.verifyAllCategoriesVisible();

  });

});