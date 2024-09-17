import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { ProductsPage } from "../../support/pages/productsPage";

const { When, Then } = createBdd();

When("User is on the Products page", async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.openProductsPage();
});

Then("User sees that products with titles", async ({ page }) => {
  const productsPage = new ProductsPage(page);

  await expect(productsPage.deerShirt).toBeVisible();
  await expect(productsPage.elephantShirt).toBeVisible();
  await expect(productsPage.giraffeShirt).toBeVisible();
  await expect(productsPage.hedgehogShirt).toBeVisible();
  await expect(productsPage.lionShirt).toBeVisible();
  await expect(productsPage.tigerShirt).toBeVisible();
});

Then("User sees that products with prices", async ({ page }) => {
  const productsPage = new ProductsPage(page);

  await expect(productsPage.priceDeer).toBeVisible();
  await expect(productsPage.priceElephant).toBeVisible();
  await expect(productsPage.priceGiraffe).toBeVisible();
  await expect(productsPage.priceHedgehog).toBeVisible();
  await expect(productsPage.priceLion).toBeVisible();
  await expect(productsPage.priceTiger).toBeVisible();
});

Then("User sees that products with images", async ({ page }) => {
  const productsPage = new ProductsPage(page);

  await expect(productsPage.imgDeer).toBeVisible();
  await expect(productsPage.imgElephant).toBeVisible();
  await expect(productsPage.imgGiraffe).toBeVisible();
  await expect(productsPage.imgHedgehog).toBeVisible();
  await expect(productsPage.imgLion).toBeVisible();
  await expect(productsPage.imgLion).toBeVisible();
});
