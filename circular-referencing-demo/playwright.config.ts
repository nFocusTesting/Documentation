import {
  defineConfig,
  devices,
  // devices
} from "@playwright/test";
import "dotenv/config";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
// eslint-disable-next-line @/no-restricted-exports
export default defineConfig({
  timeout: 60_000,
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: process.env.CI ? "on-first-retry" : "on",
    headless: process.env.CI ? true : false,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium-dt-fs",
      use: {
        launchOptions: { args: ["--start-maximized"] },
        viewport: null,
      },
    },
    {
      name: "chromium-dt",
      use: {
        viewport: { height: 1080, width: 1920 },
      },
    },
    {
      name: "chromium-tab-l",
      use: {},
    },

    {
      name: "chromium-tab-p",
      use: {
        viewport: { height: 1280, width: 720 },
      },
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
    {
      name: "mob-chromium",
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "mob-webkit",
      use: { ...devices["iPhone 12"] },
    },

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
