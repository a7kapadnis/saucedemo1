import {test,expect} from '@playwright/test';
import path from 'path';

test('Capture basic screenshot',async({page}) =>
{
    await page.goto("https://www.kapruka.com/");
    await page.screenshot({path:'screenshots/basic19.png'});
    await page.screenshot({path:path.resolve('c:\\framework\\screenshots\\a19.jpg'),fullPage:true});
    await page.screenshot({path:path.resolve('c:\\framework\\screenshots\\a19-1.jpg'),quality:80,type:'jpeg'});
    await page.screenshot({path:path.resolve('c:\\framework\\screenshots\\Clipped19.png'),
        clip: { x:100, y:50,width:800,height:600}});

    await page.goto('https://playwright.dev/');
    await page.screenshot({path:path.resolve('c:\\framework\\screenshots\\transparent19.png'),
          omitBackground:true});
          const buffer=await page.screenshot();
          expect(buffer.length).toBeGreaterThan(0);
});
test('screenshot with timeout',async({page})=>
{
await page.goto('https://playwright.dev/');
await page.screenshot({path:'screenshots\\timeout.png',timeout:30000});
const GetButton=page.getByRole('link',{name:"Get Started"});
await GetButton.screenshot({path:path.resolve('c:\\framework\\screenshots\\element.png')});
});