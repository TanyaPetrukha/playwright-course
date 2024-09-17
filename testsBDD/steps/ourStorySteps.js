import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { OurStoryPage } from "../../support/pages/ourStoryPage";

const { When, Then } = createBdd();

When("User is on the Our Story page", async ({ page }) => {
  const ourStoryPage = new OurStoryPage(page);

  await ourStoryPage.openOurStoryPage();
});

Then("User sees the Heading", async ({ page }) => {
  const ourStoryPage = new OurStoryPage(page);

  await expect(ourStoryPage.titleOurStoryPage).toBeVisible();
});

Then("User sees info about employees", async ({ page }) => {
  const ourStoryPage = new OurStoryPage(page);

  await expect(ourStoryPage.infoAboutEmployees).toBeVisible();
  await expect(ourStoryPage.avatarFirstEmployee).toBeVisible();
  await expect(ourStoryPage.nameFirstEmployee).toBeVisible();
  await expect(ourStoryPage.avatarSecondEmployee).toBeVisible();
  await expect(ourStoryPage.nameSecondEmployee).toBeVisible();
});

Then("User sees motivation paragraphs", async ({ page }) => {
  const ourStoryPage = new OurStoryPage(page);

  await expect(ourStoryPage.passionPar).toBeVisible();
  await expect(ourStoryPage.passionMeans).toBeVisible();

  await expect(ourStoryPage.animalPar).toBeVisible();
  await expect(ourStoryPage.animalMeans).toBeVisible();

  await expect(ourStoryPage.stylePar).toBeVisible();
  await expect(ourStoryPage.styleMeans).toBeVisible();
});
