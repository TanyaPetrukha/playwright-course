import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://ilarionhalushka.github.io/jekyll-ecommerce-demo/");
  await page
    .locator("li")
    .filter({ hasText: "Scar the Lion Scar the lion" })
    .getByRole("link")
    .first()
    .click();
  await page.getByRole("button", { name: "Add to cart" }).click();
  await page.getByLabel("Size").selectOption("Small");
  await page.getByRole("button", { name: "Checkout" }).click();
  await page.getByLabel("Full name").click();
  await page.getByLabel("Full name").fill("Tanya Test");
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("Tanya_test@test.com");
  await page.getByLabel("Email").press("Tab");
  await page.getByLabel("Street address").fill("Tryskavec");
  await page.getByLabel("Apt/Suite").click();
  await page.getByLabel("Apt/Suite").fill("456");
  await page.getByLabel("City").click();
  await page.getByLabel("City").fill("Tryskavec");
  await page.getByLabel("Country").click();
  await page.getByLabel("Country").fill("uk");
  await page.getByText("Ukraine").click();
  await page.getByLabel("Province/State").click();
  await page.getByLabel("Province/State").fill("Lvivska");
  await page.getByLabel("Postal/ZIP code").click();
  await page.getByLabel("Postal/ZIP code").fill("85614");
  await page.getByRole("button", { name: "Continue to payment" }).click();
  await page.frameLocator("iframe").getByPlaceholder("Card number").click();
  await page
    .frameLocator("iframe")
    .getByPlaceholder("Card number")
    .fill("4242 4242 4242 42422");
  await page.frameLocator("iframe").getByPlaceholder("MM/YY").click();
  await page.frameLocator("iframe").getByPlaceholder("MM/YY").fill("08/26");
  await page
    .frameLocator("iframe")
    .getByPlaceholder("MM/YY")
    .press("ArrowRight");
  await page.frameLocator("iframe").getByPlaceholder("CVV").click();
  await page.frameLocator("iframe").getByPlaceholder("CVV").fill("123");
  await page.getByRole("button", { name: "Place order" }).click();
  await page.getByRole("button", { name: "Continue shopping" }).click();
});
