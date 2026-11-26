# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: table.spec.ts >> table page methods can be called sequentially
- Location: tests\table.spec.ts:4:5

# Error details

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('table').first().locator('tbody tr').nth(5).locator('td').nth(2)

```

# Test source

```ts
  1  | import { Page,expect,Locator} from '@playwright/test';
  2  | import { BasePage_SOLID } from './BasePage_Solid';
  3  | 
  4  | export interface TableRowData
  5  | {
  6  |     lastName: string;
  7  |     email: string;
  8  | 
  9  | }
  10 | 
  11 | export class TablePage extends BasePage_SOLID
  12 | {
  13 |     readonly table: Locator;
  14 | 
  15 |     constructor(page: Page)
  16 |     {
  17 |         super(page);
  18 |         this.table = page.locator('table').first();
  19 |     }
  20 | 
  21 |     async goto(): Promise<void>
  22 |     {
  23 |         await this.navigate('https://assertqa.com/practice/webtables');
  24 |     }
  25 | 
  26 |     async isLoaded(): Promise<void>
  27 |     {
  28 |         await expect(this.table).toBeVisible({ timeout: 10000 });
  29 |     }
  30 | 
  31 |     // get all data excluding header
  32 |     private getRows(): Locator
  33 |     {
  34 |         return this.table.locator('tbody tr');
  35 |     }
  36 | 
  37 |     // get total number of rows
  38 |     async getRowCount(): Promise<number>
  39 |     {
  40 |         return await this.getRows().count();
  41 |     }
  42 | 
  43 |     // get lastname and email from a particular row
  44 |     async getRowData(rowIndex: number): Promise<TableRowData>
  45 |     {
  46 |         const row = this.getRows().nth(rowIndex);
  47 |         const cells = row.locator('td');
> 48 |         const lastName = await cells.nth(2).textContent();
     |                                             ^ Error: locator.textContent: Target page, context or browser has been closed
  49 |         const email = await cells.nth(3).textContent();
  50 |         const normalizedLastName = lastName?.trim() || '';
  51 |         const normalizedEmail = email?.trim() || '';
  52 | 
  53 |         return {
  54 |             lastName: normalizedLastName,
  55 |             email: normalizedEmail,
  56 |                     };
  57 |     }
  58 | 
  59 |     // get all rows data
  60 |     async getAllRowData(): Promise<TableRowData[]>
  61 |     {
  62 |         const rowCount = await this.getRowCount();
  63 |         const rowsData: TableRowData[] = [];
  64 | 
  65 |         for (let i = 0; i < rowCount; i++)
  66 |         {
  67 |             const data = await this.getRowData(i);
  68 |             rowsData.push(data);
  69 |             console.log(data);
  70 |         }
  71 | 
  72 |         return rowsData;
  73 |     }
  74 | 
  75 |     async validateRowData(rowData: TableRowData): Promise<void>
  76 |     {
  77 |         const lastName = rowData.lastName || rowData.Email || '';
  78 |         const email = rowData.email || rowData.Email || '';
  79 | 
  80 |         expect(lastName.trim()).toBeTruthy();
  81 |         expect(email.trim()).toBeTruthy();
  82 |         console.log('Last name:', lastName);
  83 |         console.log('Email:', email);
  84 |     }
  85 | }
```