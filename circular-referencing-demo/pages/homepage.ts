import { BasePage } from "@pages";
import { Page } from "@playwright/test";

export class Homepage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
}
