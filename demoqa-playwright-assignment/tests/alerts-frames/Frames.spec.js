import { test, expect } from '@playwright/test';
import { FramesPage } from '../../pages/FramesPage';

test ('Handle iFrames' , async ({page}) => {

    const frames = new FramesPage(page);
    await frames.gotoFramesPage();

    //total number of frames
    const totalFrames = frames.totalNumberOfFrames();
    console.log('Total Frames:', totalFrames);

    await expect(frames.frame1Heading).toHaveText('This is a sample page');
    await expect(frames.frame2Heading).toContainText('This is a sample page');

})