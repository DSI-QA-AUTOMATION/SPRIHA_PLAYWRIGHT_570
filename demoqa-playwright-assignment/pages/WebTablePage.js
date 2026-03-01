import { BasePage } from "./base/BasePage";

export class WebTablePage extends BasePage {
  constructor(page) {
    super(page);

    this.table = page.locator('table');
    this.rows = this.table.locator('tbody tr');
    this.addBtn = page.locator('#addNewRecordButton');

    this.firstName = page.locator('#firstName');
    this.lastName = page.locator('#lastName');
    this.email = page.locator('#userEmail');
    this.age = page.locator('#age');
    this.salary = page.locator('#salary');
    this.department = page.locator('#department');
    this.submitBtn = page.locator('#submit');
  }

  async gotoWebTablePage() {
    await this.goto("/webtables");
  }

  async clickAdd() {
    this.addBtn.click();
  }

  async fillForm(data) {
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.email.fill(data.email);
    await this.age.fill(data.age);
    await this.salary.fill(data.salary);
    await this.department.fill(data.department);
  }

  async submitForm() {
    await this.submitBtn.click();
  }

  getCellByText(text) {
    return this.page.getByRole('cell', { name: text });
  }

  async getRowCount() {
    return await this.rows.count();
  }


//print table details using loop
  /*async printTableData(){
    const updatedRows = this.page.locator('.rt-tbody .rt-tr-group');

    for(let i=0; i< await updatedRows.count(); i++){
      const row = updatedRows.nth(i);
      const cells = row.locator('.rt-td').filter({ hasText: /\S/ });
      
      const cellCount = await cells.count();
      for(let j=0; j< cellCount; j++){
        console.log('Print data:' , await cells.nth(j).textContent());
      }
    }*/
}