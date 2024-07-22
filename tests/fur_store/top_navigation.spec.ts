import { test, expect, Page } from '@playwright/test';

let page: Page;

test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto(
    "https://ilarionhalushka.github.io/jekyll-ecommerce-demo/"
  );
});


const navigateToOurStory = async () => {
  await page
  .getByRole("navigation")
  .getByRole("link", {name: "Our Story" })
  .click();
  }

const navigateToContact = async () => {
  await page
  .getByRole("navigation")
  .getByRole("link", {name: "Contact" })
  .click();
  }

const navigateToProducts = async () => {
  await page
  .getByRole("navigation")
  .getByRole("link", {name: "Products" })
  .click();
}

test("top navigation should navigate to Our Story", async ({ }) => {
  await navigateToOurStory();

  await expect(page.getByRole("heading", { name: "Our story" })).toBeVisible();
});

test("top navigation should navigate to Products", async ({ }) => {
  await navigateToOurStory();
  await navigateToProducts();

  await expect(
    page.getByRole("heading", { name: "Find your spirit animal" })
  ).toBeVisible();
  await expect(
    page.getByText('The animal friendly clothing')
  ).toBeVisible();
});

test("top navigation should navigate to Contact", async ({ }) => {
  await navigateToContact();

  await expect(
    page.getByRole("heading", { name: "Get in touch" })
  ).toBeVisible();
});

test("top navigation should navigate to Products by clicking on Logo", async ({ }) => {
  await navigateToContact();
  await page.getByRole("link", { name: "Fur", exact: true }).click();

  await expect(
    page.getByRole("heading", { name: "Find your spirit animal" })
  ).toBeVisible();
});

