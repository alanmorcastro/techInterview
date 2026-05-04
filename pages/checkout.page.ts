import { BasePage } from "./base.page";
import { Page, Locator, expect } from "../utils/fixture";
import { CHECKOUT_INFORMATION } from "../utils/constants";

export class CheckoutPage extends BasePage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly cartItems: Locator;
  readonly summaryInfo: Locator;
  readonly orderSubmittedHeader: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.postalCodeInput = page.getByRole('textbox', { name: 'Zip/Postal Code' });
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.finishButton = page.getByRole('button', { name: 'Finish' });
    this.cartItems = page.locator('[data-test="inventory-item"]');
    this.summaryInfo = page.locator('.summary_info');
    this.orderSubmittedHeader = page.getByRole('heading', { name: 'Thank you for your order!' });
  }

  async fillInformation() {
    await this.firstNameInput.fill(CHECKOUT_INFORMATION.firstName);
    await this.lastNameInput.fill(CHECKOUT_INFORMATION.lastName);
    await this.postalCodeInput.fill(CHECKOUT_INFORMATION.postalCode);
  }

  async continueToOverview() {
    await this.continueButton.click();
  }

  async assertItemsInOverview() {
    await this.cartItems.nth(0).waitFor();
    const count = await this.cartItems.count();
    if (count === 0) throw new Error('No items found in checkout overview');
  }

  async assertSummaryInfo() {
    await this.summaryInfo.waitFor();
    const text = await this.summaryInfo.textContent();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async assertOrderSubmitted() {
    await expect(this.orderSubmittedHeader).toBeVisible();
  }
}