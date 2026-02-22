import { BasePage } from "./base/BasePage";

export class WebTablePage extends BasePage {
  constructor(page) {
    super(page);

    this.table = page.getByRole('grid');
    this.columns = table.getByRole('columnheader')
    this.rows = table.getByRole('row')

    this.modal = page.getByRole('dialog')

    this.salaryInput = page.locator('#salary');
    this.submitBtn = page.locator("#submit");
  }

  async gotoWebTablePage() {
    await this.goto("/webtables");
  }

  async getColumnCount() {
    return await this.columnHeaders.count();
  }

  async getRowCount() {
    return await this.rows.filter({ hasText: /\S/ }).count();
  }

  async clickEditByRowId(id) {
    await this.page.locator(`#edit-record-${id}`).click();
  }

  async updateSalary(value) {
    await this.salaryInput.fill(value);
    await this.submitBtn.click();
  }

//print table details using loop
  async printTableData(){
    const updatedRows = page.locator('.rt-tbody .rt-tr-group');

    for(let i=0; i< await updatedRows.count(); i++){
      const row = updatedRows.nth(i);
      const cells = row.locator('.rt-td').filter({ hasText: /\S/ });
      
      const cellCount = await cells.count();
      for(let j=0; j< cellCount; j++){
        console.log('Print data:' , await cells.nth(j).textContent());
      }
    }
  }
}