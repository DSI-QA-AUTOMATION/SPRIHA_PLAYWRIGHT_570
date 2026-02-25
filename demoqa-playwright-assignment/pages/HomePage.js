import { BasePage } from "./base/BasePage";

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = page.locator("#userName");
    this.passwordInput = page.locator("#password");
    this.loginBtn = page.locator("#login");
    this.gotoStoreBtn = page.locator("#gotoStore");
    this.logoutBtn = page.locator("#submit");
  }

  async gotoLoginPage() {
    await this.goto("/login");
    await this.waitUntilVisible('#userName');
  }

  async loginUser(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }

  async goToBookStore() {
    await this.gotoStoreBtn.click();
  }

  async logOut() {
    await this.logoutBtn.click();
  }
}
