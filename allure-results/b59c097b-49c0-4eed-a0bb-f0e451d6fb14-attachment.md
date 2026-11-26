# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\auth.setup.ts >> Kapruka Authentication
- Location: tests\e2e\auth.setup.ts:30:1

# Error details

```
Error: Login failed
```

# Test source

```ts
  1  | import {Page, Locator, expect} from '@playwright/test';
  2  | import { BasePage } from './BasePage';
  3  | import { config } from '../config/environment';
  4  | 
  5  | export class LoginPage extends BasePage{
  6  |     readonly emailInput: Locator;
  7  |     readonly passwordInput: Locator;
  8  |     readonly loginButton: Locator;
  9  | 
  10 | 
  11 | constructor (page: Page)
  12 | {
  13 |     super(page);
  14 |     this.emailInput = page.locator('input[name="email"]'); //css selector - html tag and attribute
  15 |     this.passwordInput = page.locator('input[name="password"]');
  16 |     this.loginButton = page.locator('input[type="submit"]');
  17 | }
  18 | 
  19 | async goto(): Promise<void>{
  20 |     await this.navigate(`${config.baseUrl}${config.loginPath}`);
  21 | }
  22 | 
  23 | async isLoaded(): Promise<void> {
  24 |     await expect(this.emailInput).toBeVisible();
  25 |     await expect(this.passwordInput).toBeVisible();
  26 |     await expect(this.loginButton).toBeVisible();
  27 | }
  28 | 
  29 | async login(email:string, password: string): Promise<void>{
  30 |     await this.fill(this.emailInput, email);
  31 |     await this.fill(this.passwordInput, password);
  32 |     await this.click(this.loginButton);
  33 | }
  34 | 
  35 | async verifyLoginSuccess(): Promise<void>{
  36 |     const currentUrl = this.page.url();
  37 |     if (currentUrl.includes('error'))
  38 |     {
> 39 |         throw new Error("Login failed");
     |               ^ Error: Login failed
  40 |     }
  41 |     await expect(this.page).not.toHaveURL(/accountLogin/);
  42 | }
  43 | 
  44 | }
  45 | //
  46 | 
```