import { test, expect } from '@playwright/test';

const pages = [
  { name: '/jekyll-ecommerce-demo/', expected: 'Find your spirit animal' },
  { name: '/jekyll-ecommerce-demo/about/', expected: 'Our story' },
  { name: '/jekyll-ecommerce-demo/contact/', expected: 'Get in touch' },
];

pages.forEach(({ name, expected }) => {
  test(`Testing titles on the different pages ${name}`, async ({ page }) => {

    await page.goto(`https://ilarionhalushka.github.io${name}`);
    const heading = page.locator(`//h2[normalize-space()='${expected}']`);
    await expect(heading).toBeVisible(); 
    await expect(heading).toHaveText(expected); 
    
  });
});
