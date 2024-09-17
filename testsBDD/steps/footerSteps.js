import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
const { urls } = require("../../support/pages/urls");
const { ProductsPage } = require("../../support/pages/productsPage");
const { Footer } = require("../../support/components/footer");

const { Given, When, Then } = createBdd();

Given(
  "User is on the Product Page and scrolls to The Footer",
  async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.openProductsPage();
    await productsPage.scrollToFooter();
  }
);

Given("User sees Logo, Sections, Copyrights", async ({ page }) => {
  const footer = new Footer(page);

  await expect(footer.companyInfo).toBeVisible();
  await expect(footer.generalSection).toBeVisible();
  await expect(footer.helpSection).toBeVisible();
  await expect(footer.contactUsSection).toBeVisible();
  await expect(footer.copyrights).toBeVisible();
});

Given("User sees that General section has subsections", async ({ page }) => {
  const footer = new Footer(page);

  await expect(footer.productsInGeneral).toBeVisible();
  await expect(footer.ourStoryInGeneral).toBeVisible();
  await expect(footer.contactInGeneral).toBeVisible();
});

When("User clicks on the Our Story subsection", async ({ page }) => {
  const footer = new Footer(page);
  await footer.clickOnOurStory();
});

Then("User is navigated to Our Story page", async ({ page }) => {
  const footer = new Footer(page);
  await expect(page).toHaveURL(urls.ourStory);
});

When("User clicks on the Contact subsection", async ({ page }) => {
  const footer = new Footer(page);
  await footer.clickOnContact();
});

Then("User is navigated to Contact page", async ({ page }) => {
  const footer = new Footer(page);
  await expect(page).toHaveURL(urls.contact);
});

Given("User sees that Help section has subsections", async ({ page }) => {
  const footer = new Footer(page);

  await expect(footer.shippingInHelp).toBeVisible();
  await expect(footer.returnsInHelp).toBeVisible();
});

When("User clicks on the Shipping subsection", async ({ page }) => {
  const footer = new Footer(page);
  await footer.clickOnShipping();
});

Then("User is navigated to the Delivery Details page", async ({ page }) => {
  const footer = new Footer(page);
  await expect(page).toHaveURL(urls.shipping);
});

When("User clicks on the Returns subsection", async ({ page }) => {
  const footer = new Footer(page);
  await footer.clickOnReturns();
});

Then("User is navigated to the Returns page", async ({ page }) => {
  const footer = new Footer(page);
  await expect(page).toHaveURL(urls.returns);
});

Given(
  "User sees that Contact section has contact iformation and links to social networks",
  async ({ page }) => {
    const footer = new Footer(page);

    await expect(footer.getInTouch).toBeVisible();
    await expect(footer.emailInContact).toBeVisible();
    await expect(footer.phoneInContact).toBeVisible();
    await expect(footer.youtubeInContact).toBeVisible();
    await expect(footer.linkedinInContact).toBeVisible();
    await expect(footer.instagramInContact).toBeVisible();
  }
);

When("User clicks on the Youtube icon", async ({ page }) => {
  const footer = new Footer(page);
  await footer.clickOnYoutube();
});

Then("User is navigated to the Youtube", async ({ page }) => {
  const footer = new Footer(page);
  await expect(page).toHaveURL(/.*youtube/);
  await page.goBack();
});

Then(
  "User verifies if the year in Copyrights equal to the current",
  async ({ page }) => {
    const footer = new Footer(page);
    const copyrightText = await footer.copyrights.textContent();
    const currentYear = new Date().getFullYear();

    expect(copyrightText).toContain(
      `All Rights Reserved © ${currentYear} Fur, Inc. Template by CloudCannon`
    );
  }
);
