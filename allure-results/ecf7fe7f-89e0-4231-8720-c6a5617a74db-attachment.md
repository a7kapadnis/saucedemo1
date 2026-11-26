# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginData.spec.ts >> Login with first user
- Location: tests\loginData.spec.ts:13:1

# Error details

```
Error: expect(page).not.toHaveURL(expected) failed

Expected pattern: not /accountLogin/
Received string: "https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp"
Timeout: 5000ms

Call log:
  - Expect "not toHaveURL" with timeout 5000ms
    14 × locator resolved to <html dir="ltr" lang="en">…</html>
       - unexpected value "https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp"

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
- list:
  - listitem:
    - link "Home":
      - /url: https://www.kapruka.com
  - listitem:
    - link "/ Customer Account Login":
      - /url: "#"
- heading "Your Shopping Account" [level=1]
- img
- heading "New Customers" [level=3]
- paragraph: If you create an account with us, you will get additional benefits such as order history, bonus cash and more.
- button "Create Account"
- heading "Kapruka Members" [level=3]
- paragraph: If you have a Kapruka account, then enter your e-mail and password here.
- textbox "Email address":
  - /placeholder: Enter email
  - text: standard_user
- textbox "Password": secret_sauce
- button "Login"
- paragraph
- link "Forgot your password":
  - /url: https://www.kapruka.com/shops/customerAccounts/forgot_password.jsp
- text: "|"
- link "Account benefits":
  - /url: javascript:void(0);
- heading "Or Sign In With" [level=3]
- iframe
- img
- text: Signed in with Google
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
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | import loginData from '../test-Data/loginData.json';
  4  | import { LoginPage } from '../pages/LoginPage';
  5  | 
  6  | test.use({
  7  |     storageState: {
  8  |         cookies: [],
  9  |         origins: []
  10 |     }
  11 | });
  12 | 
  13 | test('Login with first user', async ({ page }) => {
  14 | 
  15 |     const loginPage = new LoginPage(page);
  16 | 
  17 |     await loginPage.goto();
  18 | 
  19 |     await loginPage.isLoaded();
  20 | 
  21 |     await loginPage.login(
  22 |         loginData[0].username,
  23 |         loginData[0].password
  24 |     );
  25 | 
  26 |     // Verify successful login
> 27 |     await expect(page).not.toHaveURL(/accountLogin/);
     |                            ^ Error: expect(page).not.toHaveURL(expected) failed
  28 | 
  29 | });
  30 | 
```