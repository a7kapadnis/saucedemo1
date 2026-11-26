import { expect, Locator, Page } from '@playwright/test'; // Imports Playwright types and assertions used by this page object.
import { config } from '../config/environment'; // Uses the shared environment-specific base URL.
import { PaginationUtil } from '../utils/PaginationUtil'; // Reuses the common load-more behavior.
import { BasePage_SOLID } from './BasePage_Solid'; // Inherits shared page functionality and the loaded-state contract.

// Encapsulates navigation and product-list interactions for the mobile category page.
export class MobileProductsPage extends BasePage_SOLID {
  private readonly products: Locator; // Locates product titles so the page can detect loaded results.
  private readonly loadMoreButton: Locator; // Locates the control that requests the next product batch.

  constructor(page: Page) {
    super(page); // Injects the Playwright page through the shared base page.
    this.products = page.locator('.catalogueV2heading'); // Uses the product-title selector shared by existing listing tests.
    this.loadMoreButton = page.getByRole('button', { name: 'See More Products', exact: true }); // Finds the accessible load-more button.
  }

  async goto(): Promise<void> {
    const mobileListingUrl = new URL( // Resolves the category path against the configured environment URL.
      '/srilanka_online_search.jsp?d=mobile#mobile',
      config.baseUrl,
    );
    await this.navigate(mobileListingUrl.toString()); // Navigates using the base page's shared navigation method.
  }

  async isLoaded(): Promise<void> {
    await expect(this.products.first()).toBeVisible(); // Waits for at least one product title before interacting with pagination.
  }

  async loadAllProducts(): Promise<void> {
    await PaginationUtil.clickUntilAllProductsLoaded(this.loadMoreButton, this.products); // Delegates repeated loading to the shared pagination utility.
  }

  async getProductCount(): Promise<number> {
    return this.products.count(); // Returns the number of product titles currently in the listing.
  }
}
