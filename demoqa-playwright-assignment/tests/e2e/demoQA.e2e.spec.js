import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/HomePage";

test("User can login, go to book store and logout (E2E)", async ({ page }) => {
  const home = new HomePage(page);
  await home.gotoLoginPage();

  await home.loginUser("sprihaTest", "Spriha@1");
  await expect(page).toHaveURL("https://demoqa.com/profile");

  await home.goToBookStore();
  await expect(
    page.locator(
      "//a[normalize-space()='Learning JavaScript Design Patterns']",
    ),
  ).toBeVisible();

  await home.logOut();
});
