import { Page } from "@playwright/test";
import { Nav } from "@pages";

export class BasePage {
  public readonly page: Page;
  public readonly nav: Nav;
  constructor(page: Page) {
    this.page = page;
    this.nav = new Nav(this.page);
  }
}
