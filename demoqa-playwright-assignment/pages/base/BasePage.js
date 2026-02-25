export class BasePage{
    constructor(page){
        this.page = page;
        this.baseUrl = 'https://demoqa.com';
    }

    async goto(path = ''){
        await this.page.goto(`${this.baseUrl}${path}`);
    }

    async waitUntilVisible(selector){
        await this.page.locator(selector).waitFor();
    }
}