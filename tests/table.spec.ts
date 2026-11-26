import { expect, test } from '@playwright/test';
import { TablePage } from '../pages/TablePage';

test('table page methods can be called sequentially', async ({ page }) => {
    const tablePage = new TablePage(page);

    await tablePage.goto();
    await tablePage.isLoaded();
    const data= await tablePage.getRowData(1);
    await tablePage.validateRowData(data);
    await tablePage.getAllRowData();
  
});
