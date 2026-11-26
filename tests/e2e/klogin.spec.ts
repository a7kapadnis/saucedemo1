
import { expect, test } from '@playwright/test';
import loginData from '../../test-Data/kloginData.json';
import { LoginPage_SOLID } from '../../pages/LoginPage_Solid';

test.describe('Kapruka login with test data', () => {

  // Use a fresh session for login tests
  test.use({
    storageState: {
      cookies: [],
      origins: []
    }
  });

  loginData.forEach(({ email, password, 'expected result': expectedResult }, index) => {

    test(`login case ${index + 1} (${expectedResult})`, async ({ page }) => {

      const loginPage = new LoginPage_SOLID(page);

      await loginPage.goto();
      await loginPage.isLoaded();
      await loginPage.login(email, password);

      if (expectedResult.toLowerCase() === 'valid') {
        await expect(page).not.toHaveURL(/accountLogin/);
      } 
      else if (expectedResult.toLowerCase() === 'invalid') {
        await expect(page).toHaveURL(/accountLogin/);
      } 
      else {
        throw new Error(`Unsupported expected result: ${expectedResult}`);
      }

    });
  });
});
