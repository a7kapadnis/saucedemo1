import {test,expect} from '@playwright/test';
test('Upload file', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/upload');
    const uploadFile = page.locator('#file-upload');
    await uploadFile.setInputFiles('c:/framework/test-Data/Archana-kapadnis.pdf');
    
    await page.locator('#file-submit').click();
    await expect(page.locator('#uploaded-files')).toHaveText('Archana-kapadnis.pdf');
    

});
