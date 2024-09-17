import { test, expect } from "@playwright/test";
import { OurStoryPage } from "../support/pages/ourStoryPage";


test.beforeEach(async ({ page }) => {
    const ourStoryPage = new OurStoryPage(page);
    await ourStoryPage.openOurStoryPage();
});

test("our story page has a heading", async ({ page }) => {
    const ourStoryPage = new OurStoryPage(page);

    await expect(ourStoryPage.titleOurStoryPage).toBeVisible();
});


test("our story page has info about employees", async ({ page }) => {
    const ourStoryPage = new OurStoryPage(page);
    
    await expect(ourStoryPage.infoAboutEmployees).toBeVisible();
    await expect(ourStoryPage.avatarFirstEmployee).toBeVisible();
    await expect(ourStoryPage.nameFirstEmployee).toBeVisible();
    await expect(ourStoryPage.avatarSecondEmployee).toBeVisible();
    await expect(ourStoryPage.nameSecondEmployee).toBeVisible();
});

test("out story page has motivation paragraphs", async ({ page }) => {
    const ourStoryPage = new OurStoryPage(page);

    await expect(ourStoryPage.passionPar).toBeVisible();
    await expect(ourStoryPage.passionMeans).toBeVisible();

    await expect(ourStoryPage.animalPar).toBeVisible();
    await expect(ourStoryPage.animalMeans).toBeVisible();

    await expect(ourStoryPage.stylePar).toBeVisible();
    await expect(ourStoryPage.styleMeans).toBeVisible();
});
  