const { test, expect } = require("@playwright/test");
import { InteractionsPage } from "../../pages/InteractionsPage";

test("Drag and drop", async ({ page }) => {
  const dropPage = new InteractionsPage(page);

  await dropPage.gotoDragAnDropPage();

  //simple drag and drop
  await dropPage.simpleDragAndDrop();
  await expect(dropPage.simpleDropBox).toContainText("Dropped!");

  //accept drag and drop
  await dropPage.acceptTabClick();
  await dropPage.dragNotAcceptable();
  await expect(dropPage.acceptDropBox).toContainText("Drop Here");
});
