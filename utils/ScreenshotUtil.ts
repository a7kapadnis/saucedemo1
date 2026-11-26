import {Page} from '@playwright/test';
export class ScreenshotUtil{
    static async takeScreenshot(page:Page,screenshotName:string):Promise<void>
    {
        const timestamp=new Date().toISOString().replace(/[:.]/g,'-');
        await page.screenshot({path:`screenshots/${screenshotName}_${timestamp}.png`,fullPage:true});
    }
}
