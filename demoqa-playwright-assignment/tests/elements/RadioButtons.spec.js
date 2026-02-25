import { test, expect } from "@playwright/test";
import { RadioButtonPage } from '../../pages/RadioButtonPage';

test('Test Radio Buttons', async ({page})=>{

    const radioPage = new RadioButtonPage(page);

    await radioPage.gotoRadioPage();

    await expect(radioPage.title).toBeVisible();

    //Select yes
    await radioPage.selectYes();
    await expect(radioPage.resultText).toHaveText('Yes')

    //Select impressive
    await radioPage.selectImpressive();
    await expect(radioPage.resultText).toHaveText('Impressive')

    // Assert No is disabled
    await expect(radioPage.noBtn).toBeDisabled();
})