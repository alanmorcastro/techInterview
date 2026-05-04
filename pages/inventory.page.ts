import { Page, Locator } from '../utils/fixture';
import { BasePage } from './base.page';

export class InventoryPage extends BasePage {
  readonly inventoryItems: Locator;

  constructor(page: Page){
    super(page);
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
  }

  async addItemToCart(index?: number) {
    if (index !== undefined && index <= 0) throw new Error('Index must be greater than 0');
    
    if (index !== undefined) {
      await this.inventoryItems
        .nth(index-1)
        .getByRole('button', { name: 'Add to cart' })
        .click();
      return;
    }

    const inventoryItemCount = await this.inventoryItems.count();
    const randomIndex = Math.floor(Math.random() * inventoryItemCount);
    await this.inventoryItems
      .nth(randomIndex)
      .getByRole('button', { name: 'Add to cart' })
      .click();
  }
}