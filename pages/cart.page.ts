import { BasePage } from "./base.page";
import { expect, Locator, Page } from "../utils/fixture";

export class CartPage extends BasePage {

  readonly cartItems: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.cartItems = page.locator('[data-test="inventory-item"]');
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  async assertItemsInCart() {
    await this.cartItems.nth(0).waitFor();
    const count = await this.cartItems.count();
    await expect(count).toBeGreaterThan(0);
  }

  async navigateToCheckout() {
    await this.checkoutButton.click();
  }
}