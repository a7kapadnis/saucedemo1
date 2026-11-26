
import { test as setup } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { LoginPage } from '../../pages/LoginPage';


  // Load QA environment variables

const email = process.env.TEST_EMAIL;
const password = process.env.TEST_PASSWORD;

// Validate credentials
if (!email || !password) {
  throw new Error('Test credentials are missing in config/.env.qa (TEST_EMAIL, TEST_PASSWORD)');
}

// Authentication file path
const authFile = path.join(
  process.cwd(),
  'playwright',
  '.auth',
  'auth.json'
);

setup('Kapruka Authentication', async ({ page }) => {

  // Create auth folder
  fs.mkdirSync(path.dirname(authFile), {
    recursive: true
  });

  const loginPage=new LoginPage(page);
  await loginPage.goto();
  await loginPage.isLoaded();
  await loginPage.login(email, password);
  await loginPage.verifyLoginSuccess();
  await page.context().storageState({ path: authFile });

  // Login steps will be added after confirming locators

});
