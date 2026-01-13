exports.NewUserCreationPage =
class NewUserCreationPage {

    constructor (page){
        this.page = page;
        this.newUserbtn = '#newUser';
        this.firstnameInput = '#firstname';
        this.lastNameInput = '#lastname';
        this.userNameInput = '#userName';
        this.password = '#password';
        this.registerbtn = '#register';
        this.loginBackbtn = '#gotologin'
    }

    async gotoRegistrationPage(){
        await this.page.goto('https://demoqa.com/register')
    }

    async registerUser(firstname, lastname, username, password){
        await this.page.locator(this.firstnameInput).fill(firstname);
        await this.page.locator(this.lastNameInput).fill(lastname);
        await this.page.locator(this.userNameInput).fill(username);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.registerbtn).click();
        await this.page.locator(this.loginBackbtn).click();
        
    }
}