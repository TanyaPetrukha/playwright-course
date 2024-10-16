import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { Cart } from "../../support/components/cart";
import { ProductsPage } from "../../support/pages/productsPage";
import { BillingForm } from "../../support/components/billingForm";

const { Given, When, Then } = createBdd();

let productsPage;
let paymentForm;
let cart;

Given("User navigates to main page", async ({ page }) => {
  productsPage = new ProductsPage(page);
  paymentForm = new BillingForm(page);
  await productsPage.openProductsPage();
});

When("User chooses a T-shirt {string}", async ({ page }, tshirt) => {
  const shirtLink = productsPage.getTitle(tshirt);
  await shirtLink.click();
});

Given("User adds T-shirt to cart", async ({ page }) => {
  await productsPage.addToCart.click();
});

Given(
  "User changes T-shirt parameters to {string} and {string}",
  async ({ page }, size, color) => {
    await productsPage.setShirtParameters(size, color);
    await productsPage.checkout.click();
  }
);

Given("User fills a billing form", async ({ page }) => {
  await paymentForm.fillBillingForm(
    "Joe Fournier",
    "Fournier@jourr.apide",
    "Holly Trail",
    "555",
    "Bracey",
    "United States",
    "Alabama",
    "23927"
  );
});

When("User submits the billing form", async ({ page }) => {
  await paymentForm.continueToPayment.click();
});

Then("Card details form is opened", async ({ page }) => {
  await paymentForm.inputCardNumber.waitFor({ state: "visible" });
});

When("User fills card details", async ({ page }) => {
  await paymentForm.fillCardDetails("4242 4242 4242 42424", "08/26", "123");
  await paymentForm.placeOrder.click();
});

Then("Order is created", async ({ page }) => {
  // await paymentForm.verifyOrderSuccessMessage();
});

Given(
  'User chooses a T-shirt "Gavin the Tiger" and adds 2 to cart',
  async ({ page }) => {
    await productsPage.getTitle("Gavin the Tiger").click();
    await productsPage.addToCart.click();
    const cart = new Cart(page);
    await cart.incrementQuantity();
  }
);

Given("User continues shopping", async ({ page }) => {
  await productsPage.openProductsPage();
});

Given(
  'User chooses a T-shirt "Gerald the Giraffe" and adds 1 to cart',
  async ({ page }) => {
    await productsPage.getTitle("Gerald the Giraffe").click();
    await productsPage.addToCart.click();
  }
);

Given(
  'User verifies order summary has 2 "Gavin the Tiger" and 1 "Gerald the Giraffe" with correct pricing',
  async ({ page }) => {
    await productsPage.openProductsPage();

    const productGiraffe = (
      await productsPage.getPrice("Gerald the Giraffe").textContent()
    ).trim();
    const productTiger = (
      await productsPage.getPrice("Gavin the Tiger").textContent()
    ).trim();

    console.log("Product Giraffe Price on page:", productGiraffe);
    console.log("Product Tiger Price on page:", productTiger);

    const cart = new Cart(page);
    await cart.openCart();
    await page.waitForTimeout(500);

    const cartPriceTiger = (
      await page.getByText("$").first().textContent()
    ).trim();
    const cartPriceGiraffe = (
      await page.getByText("$").nth(1).textContent()
    ).trim();

    console.log("Cart Tiger Price in the Cart:", cartPriceTiger);
    console.log("Cart Giraffe Price in the Cart:", cartPriceGiraffe);

    await expect(productTiger).toBe(cartPriceTiger);
    await expect(productGiraffe).toBe(cartPriceGiraffe);

    await productsPage.checkout.click();
  }
);

Given(
  'User corrects quantity of "Gavin the Tiger" t-shirt to 1',
  async ({ page }) => {
    const cart = new Cart(page);
    await cart.decrementQuantity("Gavin the Tiger");
    await productsPage.checkout.click();
  }
);
