# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\klogin.spec.ts >> Kapruka login with test data >> login case 3 (Invalid)
- Location: tests\e2e\klogin.spec.ts:7:5

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
- link "logo area":
  - /url: https://www.kapruka.com
  - img "logo area"
- textbox "SEARCH PRODUCTS.."
- button "online search":
  - img "Search"
- combobox "Select Currency":
  - option "INR" [selected]
  - option "USD"
- combobox "Select language":
  - option "Lang"
  - option "සිං"
  - option "Eng" [selected]
- link:
  - /url: /shops/checkout/deliveryCartViewPage.jsp
  - img
- link "Check Order Status":
  - /url: https://www.kapruka.com/contactUs/orderStatus.jsp
  - img "status"
- link "Login to Your Account":
  - /url: https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp
  - img
  - text: (Test)
- list:
  - listitem: All Categories
  - listitem:
    - link "Ask Aloka, Kapruka's personal shopping assistant":
      - /url: https://www.kapruka.com/aloka/?src=menu
      - text: Ask Aloka NEW
  - listitem:
    - link "Same Day Rush delivery":
      - /url: https://www.kapruka.com/online/samedaydelivery
      - img "Same Day"
      - text: Rush delivery
  - listitem:
    - link "On Sale":
      - /url: https://www.kapruka.com/online/promotions
  - listitem:
    - link "Events":
      - /url: https://www.kapruka.com/shops/events_home.jsp
  - listitem:
    - link "Brands":
      - /url: https://www.kapruka.com/online_brands.jsp
  - listitem:
    - link "For You":
      - /url: https://www.kapruka.com/online/combogifts
- complementary:
  - text: TB
  - paragraph: test bird
  - navigation:
    - link "Dashboard":
      - /url: accountView.jsp
      - img
      - text: Dashboard
    - link "My Orders":
      - /url: accountShowAllOrders.jsp
      - img
      - text: My Orders
    - link "Profile & Security":
      - /url: accountProfileSecurity.jsp
      - img
      - text: Profile & Security
    - link "Payment Methods":
      - /url: addCreditCard.jsp
      - img
      - text: Payment Methods
    - link "Address Book":
      - /url: address_manager.jsp
      - img
      - text: Address Book
    - link "Reward Points":
      - /url: account_reward_points.jsp
      - img
      - text: Reward Points
    - link "Notifications":
      - /url: accountSubscribe.jsp
      - img
      - text: Notifications
    - link "↪ Log Out":
      - /url: accountLogin.jsp?error=lg
- main:
  - paragraph: Welcome back,
  - heading "test bird 👋" [level=1]
  - link "Continue Shopping ›":
    - /url: https://www.kapruka.com
  - link "📦 All orders Reorder / explore your past orders":
    - /url: accountShowAllOrders.jsp
  - link "👥 My Address Book View / add / edit your address book":
    - /url: address_manager.jsp
  - link "💡 How to use points Learn how reward points work":
    - /url: faq.jsp
  - link "💳 Add Payment Method Add a saved card":
    - /url: addCreditCard.jsp
  - link "🔔 Notification Settings Edit notification settings":
    - /url: accountSubscribe.jsp
- contentinfo:
  - paragraph:
    - text: Kapruka.com -
    - link "Sri Lanka's":
      - /url: https://www.kapruka.com/contactUs/about.html
    - text: Largest Online Shop
  - navigation:
    - link "About Kapruka":
      - /url: https://www.kapruka.com/contactUs/about.html
    - text: "|"
    - link "Contact Us":
      - /url: https://www.kapruka.com/contactUs/onlineHelpForm.jsp
    - text: "|"
    - link "Order Tracking":
      - /url: https://www.kapruka.com/contactUs/orderStatus.jsp
```

# Test source

```ts
  1  | import{Page, Locator, expect} from '@playwright/test';
  2  | import { BasePage_SOLID } from './BasePage_Solid';
  3  | import {config} from '../config/environment';
  4  | 
  5  | 
  6  | export class LoginPage_SOLID extends BasePage_SOLID
  7  | //inheritance - parent properties and methods
  8  | //click, navigate, fill, page
  9  | {
  10 |     readonly emailInput: Locator;
  11 |     readonly passwordInput: Locator;
  12 |     readonly loginButton: Locator;
  13 | 
  14 |     constructor(page: Page)
  15 |     {
  16 |         super(page);// calling the constructor of my parent class
  17 |         //constructor(page: Page)
  18 |     //     this.page = page;
  19 |     // }
  20 |         this.emailInput = page.locator('input[name="email"]');
  21 |         this.passwordInput = page.locator('input[name="password"]');
  22 |         this.loginButton = page.locator('input[type="submit"]');
  23 |     }
  24 | 
  25 |     async goto(): Promise<void>
  26 |     {
  27 |         //await this.navigate('https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp');
  28 |         await this.navigate(`${config.baseUrl}${config.loginPath}`);
  29 |     }
  30 |     async login(email:string, password: string): Promise<void>
  31 |     {
  32 |         await this.fill(this.emailInput, email);
  33 |         await this.fill(this.passwordInput, password);
  34 |         await this.click(this.loginButton);
  35 |     }
  36 | 
  37 |     async verifyLoginSuccess(): Promise<void>
  38 |     {
  39 |         const currentUrl = this.page.url();
  40 |         await expect(this.page).not.toHaveURL(/accountLogin/);
  41 |         // -> /..../
  42 |     }
  43 |     async isLoaded(): Promise<void> {
> 44 |         await expect(this.emailInput).toBeVisible();
     |                                       ^ Error: expect(locator).toBeVisible() failed
  45 |         await expect(this.passwordInput).toBeVisible();
  46 |         await expect(this.loginButton).toBeVisible();
  47 |     }
  48 | 
  49 | }
  50 | 
```