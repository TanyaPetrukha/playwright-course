import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { ProductsPage } from "../../support/pages/productsPage";
import { OurStoryPage } from "../../support/pages/ourStoryPage";
import { ContactPage } from "../../support/pages/contactPage";
import { Header } from "../../support/components/header";
import { Cart } from "../../support/components/cart";
import { urls } from "../../support/pages/urls";

const { Given, When, Then } = createBdd();

Given("User is on the Product Page", async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.openProductsPage();
});

When("User clicks on the Our Story section", async ({ page }) => {
  const header = new Header(page);
  await header.clickOnOurStorySection();
});

Then("User is navigated to the Our Story page", async ({ page }) => {
  const ourStoryPage = new OurStoryPage(page);
  await expect(page).toHaveURL(urls.ourStory);
  await expect(ourStoryPage.titleOurStoryPage).toBeVisible();
});

When("User clicks on the Fur icon", async ({ page }) => {
  const header = new Header(page);
  await header.clickOnFurIcon();
});

Then("User is navigated to the Product page", async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await expect(page).toHaveURL(urls.products);
  await expect(productsPage.titleProductsPage).toBeVisible();
});

When("User clicks on the Contact section", async ({ page }) => {
  const header = new Header(page);
  await header.clickOnContactSection();
});

Then("User is navigated to the Contact page", async ({ page }) => {
  const contactPage = new ContactPage(page);
  await expect(page).toHaveURL(urls.contact);
  await expect(contactPage.titleContactPage).toBeVisible();
});

When("User clicks on the Products section", async ({ page }) => {
  const header = new Header(page);
  await header.clickOnProductsSection();
});

Then("User is navigated to the Products page", async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await expect(page).toHaveURL(urls.products);
  await expect(productsPage.titleProductsPage).toBeVisible();
});

When("User clicks on the Cart icon", async ({ page }) => {
  const header = new Header(page);
  await header.clickOnCartIcon();
});

Then("Cart form is opened", async ({ page }) => {
  const cart = new Cart(page);
  await expect(cart.titleCartform).toBeVisible();
});
