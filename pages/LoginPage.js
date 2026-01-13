exports.LoginPage = 
class LoginPage {

    constructor (page) {
        this.page = page;
        this.usernameInput = '#userName';
        this.passwordInput = '#password';
        this.loginBtn = '#login'
    }

    async gotoLoginPage(){
        await this.page.goto('https://demoqa.com/login')
    }

    //Methods
    async loginUser(username, password){
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginBtn).click();
    }
}