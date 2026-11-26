import {Page,Locator,expect} from "@playwright/test"
import { BasePage_SOLID } from "./BasePage_Solid"
import { promises } from "node:dns";


export class CurrencyPage extends BasePage_SOLID
{

    readonly currencyDropDown :Locator;
    constructor(page:Page){
        super(page);
        this.currencyDropDown=page.getByRole('combobox',{name:'Select Currency'})
    }
    async goto():Promise<void>{
        await this.navigate('/');
    }
    async isLoaded(): Promise<void> {
        await this.currencyDropDown.waitFor({state:'visible'})
    }
   async selectCurrency(currency: 'INR' | 'USD'): Promise<void> {

    await this.currencyDropDown.waitFor({ state: 'visible' });

    const current = await this.currencyDropDown.inputValue();

    console.log('Current currency:', current);
    console.log('Target currency:', currency);

    if (current === currency) {
        console.log('Currency is already selected!');
        return;
    }

    await Promise.all([
        this.page.waitForEvent('load'),
        this.currencyDropDown.selectOption({ value: currency })
    ]);

    console.log('Currency changed successfully');
}
   
    async verifyCurrency(expected:string):Promise<void>{
        await expect(this.currencyDropDown).toHaveValue(expected)

    }
}

