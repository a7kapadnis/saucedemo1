import {test,expect,Page} from '@playwright/test';
test('check code for different URL',async({page})=>
{
    await page.goto("https://automationexercise.com/signup");
   // await page.locator('uniform-days').selectOption('24');
    //const selectedDay = await page.locator('uniform-days').inputValue();
    //console.log('selectedDay : ',selectedDay);
    await page.pause();
})