import { test, expect } from '@playwright/test';
import { ButtonPage } from '../../pages/ButtonsPage';

test('TC-06: Verify click actions', async ({ page }) => {

  const buttons = new ButtonPage(page);

  await buttons.gotoButtonsPage();

  await buttons.performRightClick();
  await expect(buttons.rightClickMessage).toHaveText('You have done a right click');

  await buttons.performDoubleClick();
  await expect(buttons.doubleClickMessage).toHaveText('You have done a double click');

  await buttons.performSingleClick();
  await expect(buttons.dynamicClickMessage).toHaveText('You have done a dynamic click');
  
})