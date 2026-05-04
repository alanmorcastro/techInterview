import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { NavbarComponent } from '../components/navbar.component';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';

type FixtureTypes = {
  navbar: NavbarComponent,
  loginPage: LoginPage,
  inventoryPage: InventoryPage,
  cartPage: CartPage,
  checkoutPage: CheckoutPage
}

export const test = base.extend<FixtureTypes>({
  navbar: async ({ page }, use) => { await use(new NavbarComponent(page)) },
  loginPage: async ({ page }, use) => { await use(new LoginPage(page)) },
  inventoryPage: async ({ page }, use) => { await use(new InventoryPage(page)) },
  cartPage: async ({ page }, use) => { await use(new CartPage(page)) },
  checkoutPage: async ({ page }, use) => { await use(new CheckoutPage(page)) },
  page: async ({ page }, use) => { 
    await page.goto('/');
    use(page);
  }
});

export { Locator, Page, expect } from '@playwright/test';