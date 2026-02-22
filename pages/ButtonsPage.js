import { BasePage } from "./base/BasePage";

export class ButtonPage extends BasePage {
  constructor(page) {
    super(page);

    this.rightClick = page.locator("#rightClickBtn");
    this.doubleClick = page.locator('#doubleClickBtn');
    this.dynamicClick = page.locator("//button[text()='Click Me']");

    this.rightClickMessage = page.locator('#rightClickMessage');
    this.doubleClickMessage = page.locator('#doubleClickMessage');
    this.dynamicClickMessage = page.locator('#dynamicClickMessage');
  }

  async gotoButtonsPage() {
    await this.goto("/buttons");
  }

  async performRightClick() {
    await this.rightClick.click({button: 'right'});
  }

  async performDoubleClick() {
    await this.doubleClick.dblclick();
  }

  async performDynamicClick() {
    await dynamicClick.click();
  }

}
