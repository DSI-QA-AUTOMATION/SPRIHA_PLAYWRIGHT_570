import { test, expect } from '@playwright/test';
import { FramesPage } from '../../pages/FramesPage';

test ('TC-11: Switch to iframe' , async ({page}) => {

    const frames = new FramesPage(page);
    await frames.gotoFramesPage();

    //total number of frames
    const totalFrames = await frames.totalNumberOfFrames();
    console.log('Total Frames:', totalFrames);
    expect(totalFrames).toBe(2);

    await expect(frames.frame1Heading).toHaveText('This is a sample page');
    await expect(frames.frame2Heading).toContainText('This is a sample page');

})