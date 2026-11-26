
import { chromium } from '@playwright/test';

async function checkBrowser() {
  const browser = await chromium.launch({
    headless: false
  });

  console.log('Chromium launched successfully');

  const page = await browser.newPage();

  await page.goto('https://www.google.com');

  console.log('Page title:', await page.title());

  await browser.close();
}

checkBrowser();
