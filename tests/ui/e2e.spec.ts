import { VALID_CREDENTIALS } from '../../utils/constants';
import { test } from '../../utils/fixture';

test('should perform an E2E flow', async({ loginPage, inventoryPage, cartPage, checkoutPage }) => {
  await loginPage.login(VALID_CREDENTIALS.username, VALID_CREDENTIALS.password);
  await inventoryPage.addItemToCart();
  await inventoryPage.addItemToCart();
  await inventoryPage.navbar.navigateToCart();
  await cartPage.assertItemsInCart();
  await cartPage.navigateToCheckout();
  await checkoutPage.fillInformation();
  await checkoutPage.continueToOverview();
  await checkoutPage.assertItemsInOverview();
  await checkoutPage.assertSummaryInfo();
  await checkoutPage.finishCheckout();
  await checkoutPage.assertOrderSubmitted();
})