import { test, expect } from "@playwright/test";
import { ProductsPage } from "../support/pages/productsPage";
import { OurStoryPage } from "../support/pages/ourStoryPage";
import { ContactPage } from "../support/pages/contactPage";
import { Header } from "../support/components/header";
import { Cart } from "../support/components/cart";
import { urls } from "../support/pages/urls";

test.beforeEach(async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.openProductsPage();
});

test("top navigation should navigate to Our Story", async ({ page }) => {
  const header = new Header(page);
  const ourStoryPage = new OurStoryPage(page);

  await header.clickOnOurStorySection();
  await expect(page).toHaveURL(urls.ourStory);
  await expect(ourStoryPage.titleOurStoryPage).toBeVisible();
});

test("top navigation should navigate to Products by clicking on Logo", async ({ page }) => {
  const header = new Header(page);
  const productsPage = new ProductsPage(page);

  await header.clickOnFurIcon();
  await expect(page).toHaveURL(urls.products);
  await expect(productsPage.titleProductsPage).toBeVisible();
});

test("top navigation should navigate to Contact", async ({ page }) => {
  const header = new Header(page);
  const contactPage = new ContactPage(page);

  await header.clickOnContactSection();
  await expect(page).toHaveURL(urls.contact);
  await expect(contactPage.titleContactPage).toBeVisible();
});

test("top navigation should navigate to Products by choosing section", async ({ page }) => {
  const header = new Header(page);
  const productsPage = new ProductsPage(page);

  await header.clickOnProductsSection();
  await expect(page).toHaveURL(urls.products);
  await expect(productsPage.titleProductsPage).toBeVisible();
});

test("top navigation should navigate to Cart", async ({ page }) => {
  const header = new Header(page);
  const cart = new Cart(page);

  await header.clickOnCartIcon();
  await expect(cart.titleCartform).toBeVisible();
});
