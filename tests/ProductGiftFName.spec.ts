import {test,expect} from '@playwright/test';
import { ProductGiftNamePage } from '../pages/ProductGiftNamePage';
test('Checking Flowers name and price',async ({page})=>
{
    const GiftNamePage=new ProductGiftNamePage(page);
    await GiftNamePage.goto();
    await GiftNamePage.isLoaded();
    await GiftNamePage.PrintFirstProductDetails();
    //await GiftNamePage.loadAllProducts();
}
);