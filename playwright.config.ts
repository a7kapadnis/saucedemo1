
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

const env = process.env.TEST_ENV || 'qa';

dotenv.config({
  path: path.resolve(__dirname, `config/.env.${env}`),
});

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,

  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  use: {
     headless: false,
    baseURL: process.env.BASE_URL,
    screenshot: 'only-on-failure',
    trace: 'on',
  },

  projects: [
    {
      name: 'setup',
      testMatch: '**/auth.setup.ts',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'chromium',
      dependencies: ['setup'],

      testIgnore: [
        '**/PaginationWithUtility.spec.ts',
        '**/checkbox.spec.ts',
        '**/dropdown.spec.ts',
        '**/upload.spec.ts',
        
      ],

      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/auth.json',
      },
    },
    {
  name: 'saucedemo',

  testMatch: '**/saucedemo.spec.ts',

  use: {
    ...devices['Desktop Chrome'],
    headless: false,
    storageState: {
      cookies: [],
      origins: [],
    },
  },
},
    {
      name: 'chromium-public',

      testMatch: [
        '**/PaginationWithUtility.spec.ts',
        '**/checkbox.spec.ts',
      ],

      use: {
        ...devices['Desktop Chrome'],
        storageState: {
          cookies: [],
          origins: [],
        },
      },
    },
  ],
});
