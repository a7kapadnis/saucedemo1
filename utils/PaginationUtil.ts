import {expect,Locator} from '@playwright/test';
export class PaginationUtil
{
    static async clickUntilAllProductsLoaded(loadMoreButton:Locator,Products:Locator):Promise<void>
    {
        while(await loadMoreButton.isVisible() )
        {
            await expect(loadMoreButton).toBeEnabled();
            const previousProductCount= await Products.count();
            await loadMoreButton.scrollIntoViewIfNeeded();
            await loadMoreButton.click();
            await expect.poll(()=>Products.count(),{timeout:15_000}).toBeGreaterThan(previousProductCount);

        }
    }
}