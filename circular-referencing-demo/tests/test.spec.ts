import test from "@playwright/test";
import { Homepage } from "@pages";

test("Circ Test", async ({ page }) => {
  await page.goto("https://www.github.com");
  const homepage = new Homepage(page);
  await homepage.nav.toLogin();
});
