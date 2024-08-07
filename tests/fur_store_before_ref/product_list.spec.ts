import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://ilarionhalushka.github.io/jekyll-ecommerce-demo/");
});

test("products list has product with titles", async ({ page }) => {
  await expect(
    page.getByRole("link", { name: "Sacha the Deer" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Bumble the Elephant" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Gerald the Giraffe" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Todd the Hedgehog" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Scar the Lion" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Gavin the Tiger" })
  ).toBeVisible();
});


test("products list has product with prices", async ({ page }) => {
  await expect(
    page
      .locator("li")
      .filter({ hasText: "Sacha the Deer Sacha’s" })
      .getByRole("paragraph")
      .nth(1)
  ).toBeVisible();
  await expect(
    page
      .locator("li")
      .filter({ hasText: "Bumble the Elephant Bumble" })
      .getByRole("paragraph")
      .nth(1)
  ).toBeVisible();
  await expect(
    page
      .locator("li")
      .filter({ hasText: "Gerald the Giraffe Gerald the" })
      .getByRole("paragraph")
      .nth(1)
  ).toBeVisible();
  await expect(
    page
      .locator("li")
      .filter({ hasText: "Todd the Hedgehog Todd the" })
      .getByRole("paragraph")
      .nth(1)
  ).toBeVisible();
  await expect(
    page
      .locator("li")
      .filter({ hasText: "Scar the Lion Scar the lion" })
      .getByRole("paragraph")
      .nth(1)
  ).toBeVisible();
  await expect(
    page
      .locator("li")
      .filter({ hasText: "Gavin the Tiger Gavin the" })
      .getByRole("paragraph")
      .nth(1)
  ).toBeVisible();
});


test("products list has product with images", async ({ page }) => {
  await expect(page.locator(".styles").first()).toBeVisible();
  await expect(page.locator("li:nth-child(2) > .styles")).toBeVisible();
  await expect(page.locator("li:nth-child(3) > .styles")).toBeVisible();
  await expect(page.locator("li:nth-child(4) > .styles")).toBeVisible();
  await expect(page.locator("li:nth-child(5) > .styles")).toBeVisible();
  await expect(page.locator("li:nth-child(6) > .styles")).toBeVisible();
});
