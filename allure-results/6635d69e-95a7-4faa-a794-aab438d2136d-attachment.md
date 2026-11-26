# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\klogin.spec.ts >> Kapruka login with test data >> login case 1 (valid)
- Location: tests\e2e\klogin.spec.ts:7:9

# Error details

```
Error: expect(page).not.toHaveURL(expected) failed

Expected pattern: not /accountLogin/
Received string: "https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp?error=loginError1&email=testbird169@gmail.com&origin=regular"
Timeout: 5000ms

Call log:
  - Expect "not toHaveURL" with timeout 5000ms
    13 × locator resolved to <html dir="ltr" lang="en">…</html>
       - unexpected value "https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp?error=loginError1&email=testbird169@gmail.com&origin=regular"

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
- text: Sorry, we did not find an account for that e-mail address.
- img
- heading "New Customers" [level=3]
- paragraph: If you create an account with us, you will get additional benefits such as order history, bonus cash and more.
- button "Create Account"
- heading "Kapruka Members" [level=3]
- paragraph: If you have a Kapruka account, then enter your e-mail and password here.
- textbox "Email address":
  - /placeholder: Enter email
- textbox "Password"
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
  1  | import { expect, test } from '@playwright/test';
  2  | import loginData from '../../test-Data/kloginData.json';
  3  | import { LoginPage_SOLID } from '../../pages/LoginPage_Solid';
  4  | 
  5  | test.describe('Kapruka login with test data', () => {
  6  |   loginData.forEach(({ email, password, 'expected result': expectedResult }, index) => {
  7  |     test(`login case ${index + 1} (${expectedResult})`, async ({ page }) => {
  8  |       const loginPage = new LoginPage_SOLID(page);
  9  |       await loginPage.goto();
  10 |       await loginPage.isLoaded();
  11 |       await loginPage.login(email, password);
  12 | 
  13 |       if (expectedResult.toLowerCase() === 'valid') {
> 14 |         await expect(page).not.toHaveURL(/accountLogin/);
     |                                ^ Error: expect(page).not.toHaveURL(expected) failed
  15 |       } else if (expectedResult.toLowerCase() === 'invalid') {
  16 |         await expect(page).toHaveURL(/accountLogin/);
  17 |       } else {
  18 |         throw new Error(`Unsupported expected result: ${expectedResult}`);
  19 |       }
  20 |     });
  21 |   });
  22 | });
  23 | 
```