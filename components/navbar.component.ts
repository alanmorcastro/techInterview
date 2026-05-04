import { Page, Locator } from "@playwright/test";

export class NavbarComponent {
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.cartButton = page.locator('[data-test="shopping-cart-link"]');
  }

  async navigateToCart() {
    await this.cartButton.click();
  }
}