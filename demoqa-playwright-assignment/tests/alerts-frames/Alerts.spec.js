import { test, expect } from "@playwright/test";
import { AlertsPage } from "../../pages/AlertsPage";

test.describe("TC-10: Handle alert popup", () => {
  test("Handle simple alert", async ({ page }) => {
    const alerts = new AlertsPage(page);
    await alerts.gotoAlertPage();

    await alerts.handleDialog("You clicked a button");
    await alerts.alertBtn.click();
  });

  test("Handle timer alerts", async ({ page }) => {
    const alerts = new AlertsPage(page);
    await alerts.gotoAlertPage();

    await alerts.handleDialog("This alert appeared after 5 seconds");
    await alerts.alertBtn.click();
  });

  test("Handle alerts with confirmation", async ({ page }) => {
    const alerts = new AlertsPage(page);
    await alerts.gotoAlertPage();

    await alerts.handleDialog("Do you confirm action?");

    await alerts.confirmBtn.click();
    await expect(alerts.confirmResult).toHaveText("You selected Ok");
  });

  test("Promt dialog", async ({ page }) => {
    const alerts = new AlertsPage(page);
    await alerts.gotoAlertPage();

    await alerts.handleDialog("Please enter your name", "accept", "Spriha");

    await alerts.promptBtn.click();
    await expect(alerts.promptResult).toHaveText("You entered Spriha");
  });
});
