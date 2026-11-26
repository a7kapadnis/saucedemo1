import { Page,expect,Locator} from '@playwright/test';
import { BasePage_SOLID } from './BasePage_Solid';

export interface TableRowData
{
    lastName: string;
    email: string;

}

export class TablePage extends BasePage_SOLID
{
    readonly table: Locator;

    constructor(page: Page)
    {
        super(page);
        this.table = page.locator('table').first();
    }

    async goto(): Promise<void>
    {
        await this.navigate('https://assertqa.com/practice/webtables');
    }

    async isLoaded(): Promise<void>
    {
        await expect(this.table).toBeVisible({ timeout: 10000 });
    }

    // get all data excluding header
    private getRows(): Locator
    {
        return this.table.locator('tbody tr');
    }

    // get total number of rows
    async getRowCount(): Promise<number>
    {
        return await this.getRows().count();
    }

    // get lastname and email from a particular row
    async getRowData(rowIndex: number): Promise<TableRowData>
    {
        const row = this.getRows().nth(rowIndex);
        const cells = row.locator('td');
        const lastName = await cells.nth(2).textContent();
        const email = await cells.nth(3).textContent();
        const normalizedLastName = lastName?.trim() || '';
        const normalizedEmail = email?.trim() || '';

        return {
            lastName: normalizedLastName,
            email: normalizedEmail,
                    };
    }

    // get all rows data
    async getAllRowData(): Promise<TableRowData[]>
    {
        const rowCount = await this.getRowCount();
        const rowsData: TableRowData[] = [];

        for (let i = 0; i < rowCount; i++)
        {
            const data = await this.getRowData(i);
            rowsData.push(data);
            console.log(data);
        }

        return rowsData;
    }

    async validateRowData(rowData: TableRowData): Promise<void>
    {
        const lastName = rowData.lastName || rowData.Email || '';
        const email = rowData.email || rowData.Email || '';

        expect(lastName.trim()).toBeTruthy();
        expect(email.trim()).toBeTruthy();
        console.log('Last name:', lastName);
        console.log('Email:', email);
    }
}