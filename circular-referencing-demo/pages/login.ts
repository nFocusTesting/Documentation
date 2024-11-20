import { BasePage } from "@pages";
import { Page } from "@playwright/test";

export class Login extends BasePage {
  constructor(page: Page) {
    super(page);
  }
}
