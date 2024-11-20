import { Page } from "@playwright/test";
import { Homepage, Login, ShoppingCart } from "@pages";

export class Nav {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  public async toHomepage() {
    await this.page.goto("https://github.com");
    return new Homepage(this.page);
  }
  public async toLogin() {
    await this.page.goto("https://google.com");
    return new Login(this.page);
  }
  public async toShoppingCart() {
    await this.page.goto("https://playwright.dev");
    return new ShoppingCart(this.page);
  }
}
