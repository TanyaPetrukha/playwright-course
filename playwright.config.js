import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// Конфігурація для BDD тестів
const bddTestDir = defineBddConfig({
  features: ['./testsBDD/features/*.feature'],
  steps: ['./testsBDD/steps/*.js'],
  
});

// Конфігурація для звичайних Playwright тестів
export default defineConfig({
  testDir: './tests', 
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? 'blob' : 'html',

  use: {
    baseURL: process.env.BASE_URL || 'https://ilarionhalushka.github.io',
    video: 'on', // 'retain-on-failure' для збереження відео тільки для невдалих тестів
    trace: 'on', //on-first-retry
    screenshot: {
      mode: 'on',
      fullPage: true,
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium', 
      testDir: './tests', 
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'bdd-tests', 
      testDir: bddTestDir, 
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
