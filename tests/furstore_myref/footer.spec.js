import { test, expect } from "@playwright/test";
import { urls } from "../../support/pages/urls";
import ProductsPage from "../../support/pages/productsPage";
import Footer from "../../support/components/footer";

test.beforeEach(async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.openProductsPage();
    await productsPage.scrollToFooter();
});

test("footer has logo, sections, copyright", async ({ page }) => {
    const footer = new Footer(page);

    await expect(footer.companyInfo()).toBeVisible();
    await expect(footer.generalSection()).toBeVisible();
    await expect(footer.helpSection()).toBeVisible();
    await expect(footer.contactUsSection()).toBeVisible();
    await expect(footer.copyrights()).toBeVisible();
});

test("General section has navigation", async ({ page }) => {
    const footer = new Footer(page);
    
    await expect(footer.productsInGeneral()).toBeVisible();
    await expect(footer.ourStoryInGeneral()).toBeVisible();
    await expect(footer.contactInGeneral()).toBeVisible();
});    

test("Help section has navigation", async ({ page }) => {
    const footer = new Footer(page);
    
    await expect(footer.shippingInHelp()).toBeVisible();
    await expect(footer.returnsInHelp()).toBeVisible();
});  

test("Contact section has navigation", async ({ page }) => {
    const footer = new Footer(page);
    
    await expect(footer.getInTouch()).toBeVisible();
    await expect(footer.emailInContact()).toBeVisible();
    await expect(footer.phoneInContact()).toBeVisible();
    await expect(footer.youtubeInContact()).toBeVisible();
    await expect(footer.linkedinInContact()).toBeVisible();
    await expect(footer.instagramInContact()).toBeVisible();
});  

test("links in Help section", async ({ page }) => {
    const footer = new Footer(page);

    await footer.clickOnShipping();
    await expect(page).toHaveURL(urls.shipping);

    await footer.clickOnReturns();
    await expect(page).toHaveURL(urls.returns);         
});     

test("links in General section", async ({ page }) => {
    const footer = new Footer(page);

    await footer.clickOnProducts();
    await expect(page).toHaveURL(urls.products);

    await footer.clickOnOurStory();
    await expect(page).toHaveURL(urls.ourStory);

    await footer.clickOnContact();
    await expect(page).toHaveURL(urls.contact);
});  

test("links in Contact section", async ({ page }) => {
    const footer = new Footer(page);

    await footer.clickOnGetInTouch();
    await expect(page).toHaveURL(/.*contact/);
    await page.goBack();
    
    await footer.clickOnYoutube();
    await expect(page).toHaveURL(/.*youtube/);
    await page.goBack();

    await footer.clickOnLinkedin();
    await expect(page).toHaveURL(/.*linkedin/);
    await page.goBack();
    
    await footer.clickOnInstagram();
    await expect(page).toHaveURL(/.*instagram/);
    await page.goBack();
});  

test("footer has correct copyright text with current year", async ({ page }) => {
    const footer = new Footer(page);
    const copyrightText = await footer.copyrights().textContent();
    const currentYear = new Date().getFullYear();
  
    expect(copyrightText).toContain(`All Rights Reserved © ${currentYear} Fur, Inc. Template by CloudCannon`);
});
