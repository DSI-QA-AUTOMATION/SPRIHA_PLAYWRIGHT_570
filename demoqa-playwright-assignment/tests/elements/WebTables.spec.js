import { test, expect } from "@playwright/test";
import { WebTablePage } from "../../pages/WebTablePage";
import users from "../../test-data/users.json";

test("TC-05: Add new record", async ({ page }) => {
  const webTable = new WebTablePage(page);
  const userData = users.addRecord;

  await webTable.gotoWebTablePage();

  const rowCount = await webTable.getRowCount();
  console.log("Number of rows:", rowCount);

  //click on add button
  await webTable.clickAdd();
  await webTable.fillForm(userData);
  await webTable.submitForm();

  await expect(webTable.getCellByText(userData.email)).toBeVisible();

  const updatedRowCount = await webTable.getRowCount();
  expect(updatedRowCount).toBe(rowCount + 1);

});
