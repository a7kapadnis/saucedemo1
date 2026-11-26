import {test,expect} from '@playwright/test';
import { LoginPage_SOLID } from '../pages/LoginPage_Solid';
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
        await loginPage.login(TEST_EMAIL,TEST_PASSWORD);
    }
    )
})