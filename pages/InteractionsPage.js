import { BasePage } from "./base/BasePage";
const { waitForText } = require("../utils/waitHelpers").default;

export class InteractionsPage extends BasePage {
  constructor(page) {
    super(page);

    // Simple drag and drop
    this.draggable = page.locator("#draggable");
    this.simpleDropBox = page.locator("#simpleDropContainer #droppable");

    // Accept drag and drop
    this.acceptTab = page.locator("#droppableExample-tab-accept");
    this.notAcceptable = page.locator("#notAcceptable");
    this.acceptDropBox = page.locator("#acceptDropContainer #droppable");
  }

  async gotoDragAnDropPage() {
    await this.goto("/droppable");
  }

  /*async simpleDragAndDrop() {
    await this.draggable.hover();
    await this.page.mouse.down();
    await this.page.waitForTimeout(100);
    await this.simpleDropBox.hover({force: true});
    await this.page.waitForTimeout(100);
    await this.page.mouse.up();
  }*/

  async simpleDragAndDrop() {
    await this.draggable.dragTo(this.simpleDropBox);
    await waitForText(this.simpleDropBox, "Dropped!");
  }

  async acceptTabClick() {
    await this.acceptTab.click();
  }

  async dragNotAcceptable() {
    await this.notAcceptable.hover();
    await this.page.mouse.down();

    await this.acceptDropBox.hover();
    await this.page.mouse.up();
  }
}
