import { BasePage } from "./base/BasePage";

export class TextboxPage extends BasePage {
  constructor(page) {
    super(page);

    this.uploadInput = page.locator('#uploadFile');
    this.uploadedFilePath = page.locator('#uploadedFilePath');
  }

  async gottoUploadDownloadPage() {
    await this.goto("/upload-download");
  }

  async uploadFile(fileRelativePath) {
    const absolutePath = path.resolve(fileRelativePath);
    await this.uploadInput.setInputFiles(absolutePath);
  }
  
  async getUploadedFileText() {
    return await this.uploadedFilePath.textContent();
  }
}