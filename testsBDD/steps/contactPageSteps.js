import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { ContactPage } from "../../support/pages/contactPage";

const { Given, When, Then } = createBdd();

Given("User navigates to Contact Page", async ({ page }) => {
  const contactPage = new ContactPage(page);
  await contactPage.openContactPage();
});

Given("User sees title, map and contact form", async ({ page }) => {
  const contactPage = new ContactPage(page);

  await expect(contactPage.titleContactPage).toBeVisible();
  await expect(contactPage.map).toBeVisible();
  await expect(contactPage.contactForm).toBeVisible();
});

When("User fills and submits the contact form", async ({ page }) => {
  const contactPage = new ContactPage(page);

  await contactPage.fillContactForm(
    "Tanya",
    "tanya@gamil.com",
    "I have a problem"
  );
  await contactPage.sendMessageButton.click();
});

Then("User is navigated to success page", async ({ page }) => {
  const contactPage = new ContactPage(page);
  await expect(page).toHaveURL(/.*contact-success/);
});
