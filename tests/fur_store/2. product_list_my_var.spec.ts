import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto("https://ilarionhalushka.github.io/jekyll-ecommerce-demo/");
});

test('The "Sacha the Deer" has image, colors, title, description, price', async ({ page }) => {
  await expect(page.getByText('The animal friendly clothing')).toBeVisible();
  await expect(page.locator('.styles').first()).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Sacha the Deer Sacha’s' }).getByRole('link').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sacha the Deer' })).toBeVisible();
  await expect(page.getByText('Sacha’s elegant antlers have')).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Sacha the Deer Sacha’s' }).getByRole('paragraph').nth(1)).toBeVisible();
});


test('The "Bumble the Elephant" has image, colors, title, description, price', async ({ page }) => {  
  await expect(page.locator('li:nth-child(2) > .styles')).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Bumble the Elephant Bumble' }).getByRole('link').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Bumble the Elephant' })).toBeVisible();
  await expect(page.getByText('Bumble the humble elephant is')).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Bumble the Elephant Bumble' }).getByRole('paragraph').nth(1)).toBeVisible();
});


test('The "Gerald the Giraffe" has image, colors, title, description, price', async ({ page }) => {  
  await expect(page.locator('li:nth-child(3) > .styles')).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Gerald the Giraffe Gerald the' }).getByRole('link').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Gerald the Giraffe' })).toBeVisible();
  await expect(page.getByText('Gerald the giraffe isn’t')).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Gerald the Giraffe Gerald the' }).getByRole('paragraph').nth(1)).toBeVisible();
});


test('The "Todd the Hedgehog" has image, colors, title, description, price', async ({ page }) => {  
  await expect(page.locator('li:nth-child(4) > .styles')).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Todd the Hedgehog Todd the' }).getByRole('link').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Todd the Hedgehog' })).toBeVisible();
  await expect(page.getByText('Todd the hedgehog may have a')).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Todd the Hedgehog Todd the' }).getByRole('paragraph').nth(1)).toBeVisible();
});


test('The "Scar the Lion" has image, colors, title, description, price', async ({ page }) => {  
  await expect(page.locator('li:nth-child(5) > .styles')).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Scar the Lion Scar the lion' }).getByRole('link').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Scar the Lion' })).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Scar the Lion Scar the lion' }).getByRole('paragraph').nth(1)).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Gavin the Tiger Gavin the' }).getByRole('link').first()).toBeVisible();
});


test('The "avin the Tiger" has image, colors, title, description, price', async ({ page }) => {  
  await expect(page.locator('li:nth-child(6) > .styles')).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Gavin the Tiger Gavin the' }).getByRole('link').first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Gavin the Tiger' })).toBeVisible();
  await expect(page.getByText('Gavin the tiger was brought')).toBeVisible();
  await expect(page.locator('li').filter({ hasText: 'Gavin the Tiger Gavin the' }).getByRole('paragraph').nth(1)).toBeVisible();
});