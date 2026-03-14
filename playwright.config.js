import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./_tests",
  testMatch: "**/*.spec.js",
  use: {
    baseURL: "http://localhost:8080",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "npx serve _site -p 8080",
    url: "http://localhost:8080",
    reuseExistingServer: false,
  },
});