const {test , expect} = require ('@playwright/test');

test ('Handle nested iFrames' , async ({page}) => {

    await page.goto ('https://demoqa.com/nestedframes')
    
    const frame = await page.frame({url: 'https://demoqa.com/sampleiframe'});
    await expect(frame.locator('body')).toContainText('Parent frame');

    const childFrames = await frame.childFrames()
    console.log(childFrames.length);

    
    const childFrame = childFrames[0];
    await expect(childFrame.locator('p')).toHaveText('Child Iframe');

    await page.waitForTimeout(5000);

})