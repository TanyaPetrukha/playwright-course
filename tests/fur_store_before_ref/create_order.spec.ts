import { test, expect, Page } from '@playwright/test';

let page: Page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto(
    "https://ilarionhalushka.github.io/jekyll-ecommerce-demo/"
  );
});


test('create an order should display success page with order details', async ({ }) => {
//add to cart
await page.locator('li').filter({ hasText: 'Gavin the Tiger Gavin the' }).getByRole('link').first().click();
await page.getByRole('button', { name: 'Add to cart' }).click();


//change cart options
await page.getByLabel('Size').selectOption('Small');
await page.getByLabel('Color').selectOption('Clay');

//click checkout
await page.getByRole('button', { name: 'Checkout' }).click();

//fill out payment details form
await page.getByLabel('Full name').fill('Tanya');
await page.getByLabel('Email').fill('tanya@gamil.com');
await page.getByLabel('Street address').fill('Shevchenko');
await page.getByLabel('Apt/Suite').fill('17');
await page.getByLabel('City').fill('New York');
await page.getByLabel('Country').click();
await page.getByText('United States').click();
await page.getByLabel('Province/State').click();
await page.getByText('New York').click();
await page.getByLabel('Postal/ZIP code').fill('8N9');

//submit payment details form
await page.getByRole('button', { name: 'Continue to payment' }).click();

//fill out card details
await page.frameLocator('iframe').getByPlaceholder('Card number').click();
await page.frameLocator('iframe').getByPlaceholder('Card number').fill('4242 4242 4242 42424');
await page.frameLocator('iframe').getByPlaceholder('MM/YY').click();
await page.frameLocator('iframe').getByPlaceholder('MM/YY').fill('08/26');
await page.frameLocator('iframe').getByPlaceholder('CVV').click();
await page.frameLocator('iframe').getByPlaceholder('CVV').fill('123');


await page.getByRole('button', { name: 'Place order' }).click();

//await page.waitForLoadState('networkidle');  очікування на завершення навігації 
await expect(page.getByRole('heading', { name: 'Thank you for your order' })).toBeVisible({ timeout: 10000 });
await expect(page.getByText('Invoice number : SNIP-')).toBeVisible({ timeout: 10000 });
await expect(page.getByRole('heading', { name: 'Cart summary' })).toBeVisible({ timeout: 10000 });
await expect(page.getByRole('heading', { name: 'Billing', exact: true })).toBeVisible({ timeout: 10000 });
await expect(page.getByRole('heading', { name: 'Payment' })).toBeVisible({ timeout: 10000 });
await expect(page.getByText('Total', { exact: true })).toBeVisible({ timeout: 10000 });
await expect(page.getByText('$').nth(2)).toBeVisible({ timeout: 10000 });
});


// DIRTY FIX - wait for 5 sec
// await page.waitForTimeout(5000);
// Proper fix wait for backend request to finish
// await page.waitForResponse(
//   (response) =>
//   response.url().includes ("api/localization/addresses") &&
//   response.status() === 200 &&
//   response.request(). method() === "GET");