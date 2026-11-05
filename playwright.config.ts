/// <reference types="node" />

import { defineConfig, devices } from '@playwright/test';
import { BASE_URL, USERAGENT } from './utils/constants';
import { ACTION_TIMEOUT, EXPECT_TIMEOUT, TEST_TIMEOUT } from './utils/timeouts';

const isCI = process.env.RUNMODE === 'jenkins';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  timeout: TEST_TIMEOUT(isCI),
  expect: { timeout: EXPECT_TIMEOUT(isCI) },

  use: {
    actionTimeout: ACTION_TIMEOUT(isCI),
    trace: 'on-first-retry',
    baseURL: BASE_URL,
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    bypassCSP: true,
    launchOptions: {
      slowMo: 50,
      args: ['--disable-web-security']
    }
  },

  projects: [
    {
      name: 'CI-Desktop',
      use: {
        browserName: 'chromium',
        viewport: { width: 1800, height: 1000 },
        headless: true,
      },
    },
    {
      name: 'CI-Mobile',
      use: {
        browserName: 'chromium',
        viewport: { width: 500, height: 1000 },
        userAgent: USERAGENT,
        isMobile: true,
        hasTouch: true,
        headless: true,
      },
    },
    {
      name: 'Desktop',
      use: {
        browserName: 'chromium',
        viewport: { width: 1800, height: 1000 },
      },
    },
    {
      name: 'Mobile',
      use: {
        browserName: 'chromium',
        viewport: { width: 500, height: 1000 },
        userAgent: USERAGENT,
        isMobile: true,
        hasTouch: true,
      },
    },
  ],

  reporter: [['list'], ['html', { open: 'never' }]],

  reportSlowTests: null,
});
