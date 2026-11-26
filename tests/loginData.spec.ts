import { test, expect } from '@playwright/test';
import loginData from '../test-Data/loginData.json';
import { LoginPage } from '../pages/LoginPage';

test.use({
    storageState: {
        cookies: [],
        origins: []
    }
});

test('Login with first user', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        loginData[0].username,
        loginData[0].password
    );

    await expect(page).not.toHaveURL(/accountLogin/);

});