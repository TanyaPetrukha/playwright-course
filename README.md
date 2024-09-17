# Project Setup and Testing Guide

**Note:** Since v7, `playwright-bdd` no longer depends on `@cucumber/cucumber`. 
The minimal Playwright version required is 1.35.

## 1. Installing Playwright

Install Playwright and Playwright BDD:

```bash
npm init playwright@latest
npm i -D playwright-bdd
```

## 2. Create the following playwright.config.js in the project root:
-------------------------

```javascript
import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'sample.feature',
  steps: 'steps.js',
});

export default defineConfig({
  testDir,
  reporter: 'html',
});
```

## 3. Create feature file sample.feature:
-------------------------
```Gherkin
Feature: Playwright site

    Scenario: Check title
        Given I open url "https://playwright.dev"
        When I click link "Get started"
        Then I see in title "Playwright"
```

## 4. Implement steps in steps.js:
-------------------------
```javascript
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I open url {string}', async ({ page }, url) => {
  await page.goto(url);
});

When('I click link {string}', async ({ page }, name) => {
  await page.getByRole('link', { name }).click();
});

Then('I see in title {string}', async ({ page }, keyword) => {
  await expect(page).toHaveTitle(new RegExp(keyword));
});
```

## 5. Generate and run tests:
-------------------------
```bash
npx bddgen; npx playwright test
```

***Parallelism***
## Run in parallel:
```bash
npx playwright test -g "parallel"
```

## Control MAX number of workers
```bash
npx playwright test -g "parallel" --workers 2
```

## Disable parallelism
```bash
npx playwright test -g "parallel" --workers 1
```
## Parallelize tests in a single file

```bash
test.describe.configure({ mode: 'parallel' });
```
### More about parallelism https://playwright.dev/docs/test-parallel#worker-index-and-parallel-index

### Sharding on CI https://playwright.dev/docs/test-sharding#merging-reports-from-multiple-shards


