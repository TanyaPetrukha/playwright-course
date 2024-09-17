import { test, expect } from "@playwright/test";
import { ContactPage } from "../support/pages/contactPage";


test.beforeEach(async ({ page }) => {
    const contactPage = new ContactPage(page);
    await contactPage.openContactPage();
});

test('page has all elements', async ({ page }) => {
    const contactPage = new ContactPage(page);

    await expect (contactPage.titleContactPage).toBeVisible();
    await expect (contactPage.map).toBeVisible();
    await expect (contactPage.contactForm).toBeVisible();
});

test("submit contact form navigates to success page", async ({ page }) => {
    const contactPage = new ContactPage(page);

    await contactPage.fillContactForm('Tanya','tanya@gamil.com', 'I have a problem');
    await contactPage.sendMessageButton.click();
    await expect(page).toHaveURL(/.*contact-success/); 
  });