import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact/");
});

test('The "Contact Us" page has all elements', async ({ page }) => {
  await expect(
    page.getByRole("heading", { name: "Get in touch" })
  ).toBeVisible();
  await expect(page.locator("#map")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Send us a message" })
  ).toBeVisible();
});

test("submit contact form navigates to success page", async ({ page }) => {
  await page.getByPlaceholder("Enter your name...").fill("Tanya");
  await page.getByPlaceholder("Enter your email...").fill("Tanya@test.com");
  await page.getByPlaceholder("Enter your message...").fill("I need help");
  await page.getByRole("button", { name: "Send Message" }).click();
  await expect(page).toHaveURL(/.*contact-success/); 
});
  // or we can write it as
  //   await expect(page).toHaveURL(
  //   "https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact-success/"
  // or

  //   await expect (page.url()).toBe(
  //    "https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact-success/"
  // or
  //   await expect(page.url()).toContain("contact-success");