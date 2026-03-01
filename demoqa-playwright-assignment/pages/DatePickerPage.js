import { BasePage } from "./base/BasePage";

export class DatePickerPage extends BasePage {
  constructor(page) {
    super(page);

    this.dateInput = page.locator("#datePickerMonthYearInput");
    this.currentMonthYear = page.locator(".react-datepicker__current-month");
    this.nextMonthBtn = page.locator("button[aria-label='Next Month']");
  }

  async gotoDatePickerPage() {
    await this.goto("/date-picker");
  }

  async selectDate(year, month, day) {
    await this.dateInput.click();

    await this.currentMonthYear.waitFor();

    while (true) {
      const currentDate = (await this.currentMonthYear.textContent()).trim();

      if (currentDate === `${month} ${year}`) {
        break;
      }

      await this.nextMonthBtn.click();
    }

    const dates = await this.page.$$(".react-datepicker__day");

    for (const dt of dates) {
      if ((await dt.textContent()).trim() == day) {
        await dt.click();
        break;
      }
    }
  }
}
