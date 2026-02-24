import { BasePage } from "./base/BasePage";

export class AlertsPage extends BasePage {
  constructor(page) {
    super(page);

    this.alertBtn = page.locator("#alertButton");
    this.confirmBtn = page.locator('#confirmButton');
    this.confirmResult = page.locator('#confirmResult');
    this.promptBtn = page.locator('#promtButton');
    this.promptResult = page.locator('#promptResult');
  }

  async gotoAlertPage() {
    await this.goto("/alerts");
  }

  async handleDialog(message, action = 'accept', text = '') {
    this.page.once('dialog', async dialog => {  
      if (action === 'accept') {
        await dialog.accept(text);
      } else {
        await dialog.dismiss();
      }
    })
  }
}
