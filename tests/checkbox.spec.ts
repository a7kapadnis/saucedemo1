import {expect,test} from '@playwright/test';
test('Select checkbox',async({page})=>
{
//await page.goto("https://demoqa.com/checkbox");
await page.goto('https://testautomationpractice.blogspot.com');
await page.getByRole('radio',{name:'Male'}).first().click();

//await page.getByText('Home').click();
//const checkbox =page.getByRole('checkbox',{name:'Select Home'});
//await checkbox.check();
//await expect(checkbox).toBeChecked();

});
