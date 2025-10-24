const {test , expect} = require ('@playwright/test');

test ('Handle iFrames' , async ({page}) => {

    await page.goto ('https://demoqa.com/frames')

    //total number of frames
    const frames = await page.frames()
    console.log(frames.length);

    //1. using name/url
    //const frame1 = await page.frame('name')    //if name attribute is present
    const frame1 = await page.frame({url: 'https://demoqa.com/sample'});
    await expect(frame1.locator('#sampleHeading')).toHaveText('This is a sample page')

    //2. using framelocator
    const frame2 = await page.frameLocator('#frame2').locator('#sampleHeading')
    await expect(frame2).toContainText('This is a sample page')

    await page.waitForTimeout(5000);

})