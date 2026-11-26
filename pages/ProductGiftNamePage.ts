import {test,expect,Page,Locator} from '@playwright/test';
import { BasePage_SOLID } from './BasePage_Solid';
import { PaginationUtil } from '../utils/PaginationUtil';
export class ProductGiftNamePage extends BasePage_SOLID
{
    readonly page :Page;
    private readonly productName: Locator;
    private readonly productPrice:Locator;

    constructor(page: Page)
    {
        super(page);
        this.page=page;

        this.productName= page.locator('.catalogueV2heading').first();
        this.productPrice=page.locator('.CatalogueV2price .sTitlePrice').first();
    }
    async goto():Promise <void>
    {
        const FlowersListingUrl ='https://www.kapruka.com/online/flowers';
        await this.navigate(FlowersListingUrl.toString());
    }
    async isLoaded(): Promise<void> {
        await expect(this.productName).toBeVisible();
    }
  //  async loadAllProducts():Promise<void>
    //{
      //    await PaginationUtil.clickUntilAllProductsLoaded(this.productName,this.productPrice); 
    //}
    async PrintFirstProductDetails():Promise<void>
    {
        const Name= await this.productName.textContent();
        const Price=await this.productPrice.textContent();
        console.log('Flower Name = '+Name?.trim());
        console.log('Flowers Price = '+Price?.trim());
    }
}