
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({
    path: path.resolve(process.cwd(), 'config/.env.qa')
});
import {test,expect} from '@playwright/test';
import { LoginPage_SOLID } from '../pages/LoginPage_Solid';
import { ScreenshotUtil } from '../utils/ScreenshotUtil';

const TEST_EMAIL =process.env.TEST_EMAIL;
const TEST_PASSWORD=process.env.TEST_PASSWORD;
test.use({storageState:{cookies:[],origins:[]}});
if(!TEST_EMAIL || !TEST_PASSWORD)
{
throw new Error('Missing env variables');
}

test.describe('kapruka login test',()=>
{
    test('valid user should login successfully',async({page})=>
    {
        const loginPage = new LoginPage_SOLID(page);
        await loginPage.goto();
        await loginPage.isLoaded();
        await ScreenshotUtil.takeScreenshot(page,'Before_Login');
        await loginPage.login(TEST_EMAIL,TEST_PASSWORD);
        await ScreenshotUtil.takeScreenshot(page,'After_Login');
    }
    )
})
