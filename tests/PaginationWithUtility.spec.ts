import { expect, test } from '@playwright/test'; // Imports the Playwright runner and assertions.
import { MobileProductsPage } from '../pages/MobileProductsPage'; // Imports the page object for the mobile listing.

test('Load all Mobile Products', async ({ page }) => { // Defines an end-to-end test for the mobile product listing.
  const mobileProductsPage = new MobileProductsPage(page); // Injects Playwright's page into the page object.

  await mobileProductsPage.goto(); // Opens the mobile product listing.
  await mobileProductsPage.isLoaded(); // Waits for the initial product batch to appear.
  await mobileProductsPage.loadAllProducts(); // Repeatedly loads results until the load-more control disappears.

  const productCount = await mobileProductsPage.getProductCount(); // Reads the number of products currently displayed.
  console.log(`Total Products Loaded: ${productCount}`); // Reports the final count in the test output.
  expect(productCount).toBeGreaterThan(0); // Fails the test if the listing contains no products.
}); // Ends the mobile product pagination test.
