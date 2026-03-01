import { BasePage } from "./base/BasePage";

export class InteractionsPage extends BasePage {
  constructor(page) {
    super(page);

    // Simple drag and drop
    this.draggable = page.locator("#draggable");
    this.simpleDropBox = page.locator("#simpleDropContainer #droppable");
  }

  async gotoDragAnDropPage() {
    await this.goto("/droppable");
  }

  async simpleDragAndDrop(maxAttempts = 20) {
    let lastError;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
      await this.draggable.scrollIntoViewIfNeeded();
      await this.simpleDropBox.scrollIntoViewIfNeeded();

      await this.draggable.dragTo(this.simpleDropBox, {
        force: true,
      });

      // Use Playwright auto-wait assertion inside page
      await this.simpleDropBox.waitFor({ state: "visible" });

      const text = await this.simpleDropBox.textContent();

      if (text && text.includes("Dropped!")) {
        return; // success
      }

      throw new Error("Drop text not updated yet");

    } catch (error) {
      lastError = error;
      console.log(`Simple drag attempt ${attempt} failed`);

      if (attempt === maxAttempts) {
        throw lastError;
      }

      // small delay before retry
      await this.page.waitForTimeout(200);
        }
      }
    }
  }
