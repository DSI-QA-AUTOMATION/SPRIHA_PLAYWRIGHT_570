const { test, expect } = require("@playwright/test");
import { InteractionsPage } from "../../pages/InteractionsPage";

test("TC-14: Drag and drop element", async ({ page }) => {
  const dropPage = new InteractionsPage(page);

  await dropPage.gotoDragAnDropPage();
  await dropPage.simpleDragAndDrop();

  await expect(dropPage.simpleDropBox)
    .toHaveText("Dropped!", { timeout: 5000 });
    
});
