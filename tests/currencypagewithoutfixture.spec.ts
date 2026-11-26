import { test } from '@playwright/test';
import { CurrencyPage } from '../pages/CurrencyPage';

test.describe('Kapruka currency dropdown without fixture', () => {
    test('switch currency from USD to INR', async ({ page }) => {
        const currencyPage = new CurrencyPage(page);

        await currencyPage.goto();
        await currencyPage.isLoaded();

        await currencyPage.selectCurrency('USD');
        await currencyPage.verifyCurrency('USD');

        await currencyPage.selectCurrency('INR');
        await currencyPage.verifyCurrency('INR');
    });

    test('switch currency from INR to USD', async ({ page }) => {
        const currencyPage = new CurrencyPage(page);

        await currencyPage.goto();
        await currencyPage.isLoaded();

        await currencyPage.selectCurrency('INR');
        await currencyPage.verifyCurrency('INR');

        await currencyPage.selectCurrency('USD');
        await currencyPage.verifyCurrency('USD');
    });
});

