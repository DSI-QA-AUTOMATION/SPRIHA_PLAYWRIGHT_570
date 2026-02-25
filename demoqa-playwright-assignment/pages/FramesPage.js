import { BasePage } from "./base/BasePage";

export class FramesPage extends BasePage{
    constructor(page){
        super(page);

        this.frame1 = page.frameLocator('#frame1');
        this.frame2 = page.frameLocator('#frame2');
    }

    async gotoFramesPage(){
        await this.goto('/frames');
    }

    totalNumberOfFrames(){
        return this.page.frames().length;
    }

    async getFrameByUrl(url) {
        const frame = this.page.frame({ url });
        if (!frame) throw new Error("Frame not found");
        return frame;
    }
    
    get frame1Heading() {
        return this.frame1.locator('#sampleHeading');
    }
    
    get frame2Heading() {
        return this.frame2.locator('#sampleHeading');
    }

}