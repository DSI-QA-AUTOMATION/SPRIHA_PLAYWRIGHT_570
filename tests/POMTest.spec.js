const { test , expect} = require ('@playwright/test')
import { LoginPage } from '../pages/LoginPage';
import { NewUserCreationPage } from '../pages/NewUserCreation';

test.skip('Test book store application' , async ({page}) => {
    
    //Create an object
    //Register
    const register = new NewUserCreationPage (page);
    await register.gotoRegistrationPage();
    await register.registerUser ( 'Spriha', 'Zannat', 'sprihaTest', 'Spriha@1');
})

test('Login' , async ({page}) => {
    //Login
    const login = new LoginPage (page);
    await login.gotoLoginPage();
    await login.loginUser ( 'sprihaTest', 'Spriha@1');
    await page.waitForTimeout(3000);
})