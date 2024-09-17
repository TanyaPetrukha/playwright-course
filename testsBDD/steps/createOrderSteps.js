import { createBdd } from "playwright-bdd";
import { ProductsPage } from "../../support/pages/productsPage";
import { BillingForm } from "../../support/components/billingForm";

const { Given, When, Then } = createBdd();

Given("User navigates to main page", async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.openProductsPage();
});

Given("User chooses a T-shirt", async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.deerShirt.click();
});

Given("User adds T-shirt to cart", async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.addToCart.click();
});

Given("User changes T-shirt parameters", async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.deerShirtParameters("Small", "Black");
  await productsPage.checkout.click();
});

Given("User fills a billing form", async ({ page }) => {
  const paymentForm = new BillingForm(page);
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
  const paymentForm = new BillingForm(page);
  await paymentForm.continueToPayment.click();
});

Then("Card details form is opened", async ({ page }) => {
  const paymentForm = new BillingForm(page);
  await paymentForm.inputCardNumber.waitFor({ state: "visible" });
});

When("User fills card details", async ({ page }) => {
  const paymentForm = new BillingForm(page);
  await paymentForm.fillCardDetails("4242 4242 4242 42424", "08/26", "123");
  await paymentForm.placeOrder.click();
});

Then("Order is created", async ({ page }) => {
  const paymentForm = new BillingForm(page);
  await paymentForm.verifyOrderSuccessMessage();
});
