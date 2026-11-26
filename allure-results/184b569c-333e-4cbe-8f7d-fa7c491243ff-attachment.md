# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\auth.setup.ts >> Kapruka Authentication
- Location: tests\e2e\auth.setup.ts:26:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('input[name="email"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('input[name="email"]') with timeout 5000ms
  - waiting for locator('input[name="email"]')

```

```yaml
- main:
  - heading "www.kapruka.com" [level=1]
  - heading "Performing security verification" [level=2]
  - paragraph: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
- contentinfo:
  - text: "Ray ID:"
  - code: a5f4f5efdc73f4b7
  - text: Performance and Security by
  - link "Cloudflare, opens in a new tab":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
    - text: Cloudflare
  - link "Privacy, opens in a new tab":
    - /url: https://www.cloudflare.com/privacypolicy/
    - text: Privacy
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
> 24 |     await expect(this.emailInput).toBeVisible();
     |                                   ^ Error: expect(locator).toBeVisible() failed
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
  35 | async verifyLoginSuccess(): Promise<void> {
  36 | 
  37 |     await expect(this.page).not.toHaveURL(/accountLogin/, {
  38 |         timeout: 15000
  39 |     });
  40 | 
  41 |     console.log('Login successful. Current URL:', this.page.url());
  42 | }
  43 | }
  44 | //
  45 | 
```