# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginData.spec.ts >> Login with first user
- Location: tests\loginData.spec.ts:6:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name="email"]') to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - generic [ref=e6]:
      - link [ref=e8] [cursor=pointer]:
        - /url: https://www.kapruka.com
        - img "logo area" [ref=e9]
      - generic [ref=e13]:
        - textbox "SEARCH PRODUCTS.." [ref=e14]
        - button "online search" [ref=e15] [cursor=pointer]:
          - img "Search" [ref=e16]
      - generic [ref=e17]:
        - combobox "Select Currency" [ref=e18]:
          - option "INR" [selected]
          - option "USD"
        - combobox "Select language" [ref=e19]:
          - option "Lang"
          - option "සිං"
          - option "Eng" [selected]
        - link [ref=e22] [cursor=pointer]:
          - /url: /shops/checkout/deliveryCartViewPage.jsp
        - link "Check Order Status" [ref=e30] [cursor=pointer]:
          - /url: https://www.kapruka.com/contactUs/orderStatus.jsp
          - img "status" [ref=e31]
        - link "Login to Your Account" [ref=e33] [cursor=pointer]:
          - /url: https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp
          - generic [ref=e37]: (Test)
    - list [ref=e39]:
      - listitem [ref=e40]:
        - generic: All Categories
      - listitem [ref=e43]:
        - link "Ask Aloka, Kapruka's personal shopping assistant" [ref=e44] [cursor=pointer]:
          - /url: https://www.kapruka.com/aloka/?src=menu
          - generic [ref=e47]: Ask Aloka
          - generic [ref=e48]: NEW
      - listitem [ref=e49]:
        - link "Same Day Rush delivery" [ref=e50] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/samedaydelivery
          - img "Same Day" [ref=e52]
          - generic [ref=e53]: Rush delivery
      - listitem [ref=e54]:
        - link "On Sale" [ref=e55] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/promotions
      - listitem [ref=e58]:
        - link "Events" [ref=e59] [cursor=pointer]:
          - /url: https://www.kapruka.com/shops/events_home.jsp
      - listitem [ref=e62]:
        - link "Brands" [ref=e63] [cursor=pointer]:
          - /url: https://www.kapruka.com/online_brands.jsp
      - listitem [ref=e66]:
        - link "For You" [ref=e67] [cursor=pointer]:
          - /url: https://www.kapruka.com/online/combogifts
  - generic [ref=e71]:
    - complementary [ref=e72]:
      - generic [ref=e73]:
        - generic [ref=e74]: TB
        - paragraph [ref=e76]: test bird
      - navigation [ref=e77]:
        - link "Dashboard" [ref=e78] [cursor=pointer]:
          - /url: accountView.jsp
        - link "My Orders" [ref=e86] [cursor=pointer]:
          - /url: accountShowAllOrders.jsp
        - link "Profile & Security" [ref=e92] [cursor=pointer]:
          - /url: accountProfileSecurity.jsp
        - link "Payment Methods" [ref=e98] [cursor=pointer]:
          - /url: addCreditCard.jsp
        - link "Address Book" [ref=e103] [cursor=pointer]:
          - /url: address_manager.jsp
        - link "Reward Points" [ref=e109] [cursor=pointer]:
          - /url: account_reward_points.jsp
        - link "Notifications" [ref=e115] [cursor=pointer]:
          - /url: accountSubscribe.jsp
        - link "↪ Log Out" [ref=e122] [cursor=pointer]:
          - /url: accountLogin.jsp?error=lg
          - generic [ref=e123]: ↪
          - generic [ref=e124]: Log Out
    - main [ref=e125]:
      - generic [ref=e126]:
        - generic [ref=e127]:
          - paragraph [ref=e128]: Welcome back,
          - heading "test bird 👋" [level=1] [ref=e129]
        - link "Continue Shopping ›" [ref=e130] [cursor=pointer]:
          - /url: https://www.kapruka.com
          - text: Continue Shopping
          - generic [ref=e131]: ›
      - generic [ref=e133]:
        - link "📦 All orders Reorder / explore your past orders" [ref=e134] [cursor=pointer]:
          - /url: accountShowAllOrders.jsp
          - generic [ref=e135]: 📦
          - generic [ref=e136]:
            - generic [ref=e137]: All orders
            - generic [ref=e138]: Reorder / explore your past orders
        - link "👥 My Address Book View / add / edit your address book" [ref=e139] [cursor=pointer]:
          - /url: address_manager.jsp
          - generic [ref=e140]: 👥
          - generic [ref=e141]:
            - generic [ref=e142]: My Address Book
            - generic [ref=e143]: View / add / edit your address book
        - link "💡 How to use points Learn how reward points work" [ref=e144] [cursor=pointer]:
          - /url: faq.jsp
          - generic [ref=e145]: 💡
          - generic [ref=e146]:
            - generic [ref=e147]: How to use points
            - generic [ref=e148]: Learn how reward points work
        - link "💳 Add Payment Method Add a saved card" [ref=e149] [cursor=pointer]:
          - /url: addCreditCard.jsp
          - generic [ref=e150]: 💳
          - generic [ref=e151]:
            - generic [ref=e152]: Add Payment Method
            - generic [ref=e153]: Add a saved card
        - link "🔔 Notification Settings Edit notification settings" [ref=e154] [cursor=pointer]:
          - /url: accountSubscribe.jsp
          - generic [ref=e155]: 🔔
          - generic [ref=e156]:
            - generic [ref=e157]: Notification Settings
            - generic [ref=e158]: Edit notification settings
  - contentinfo [ref=e159]:
    - generic [ref=e161]:
      - paragraph [ref=e163]:
        - text: Kapruka.com -
        - link "Sri Lanka's" [ref=e164] [cursor=pointer]:
          - /url: https://www.kapruka.com/contactUs/about.html
        - text: Largest Online Shop
      - navigation [ref=e165]:
        - generic [ref=e166]:
          - link "About Kapruka" [ref=e167] [cursor=pointer]:
            - /url: https://www.kapruka.com/contactUs/about.html
          - text: "|"
          - link "Contact Us" [ref=e168] [cursor=pointer]:
            - /url: https://www.kapruka.com/contactUs/onlineHelpForm.jsp
          - text: "|"
          - link "Order Tracking" [ref=e169] [cursor=pointer]:
            - /url: https://www.kapruka.com/contactUs/orderStatus.jsp
```

# Test source

```ts
  1  | import type { Locator, Page } from '@playwright/test';
  2  | 
  3  | export abstract class BasePage {
  4  |   readonly page: Page;
  5  | 
  6  |   constructor(page: Page) {
  7  |     this.page = page;
  8  |   }
  9  | 
  10 |   async click(locator: Locator): Promise<void> {
  11 |     await locator.waitFor({ state: 'visible' });
  12 |     await locator.click();
  13 |   }
  14 | 
  15 |   async navigate(url: string): Promise<void> {
  16 |     await this.page.goto(url, { waitUntil: 'load' });
  17 |   }
  18 | 
  19 |   async fill(locator: Locator, value: string): Promise<void> {
> 20 |     await locator.waitFor({ state: 'visible' });
     |                   ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  21 |     await locator.fill(value);
  22 |   }
  23 | 
  24 |   abstract isLoaded(): Promise<void>;
  25 | }
  26 | 
```