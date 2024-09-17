import { expect } from '@playwright/test';

export class BillingForm {
    constructor(page) {
        this.page = page;
        
        // Locators
        // Billing form
        this.inputName = page.locator("//input[@name='name']"); //getByLabel('Full name');
        this.inputEmail = page.locator("//input[@name='email']"); //getByLabel('Email');
        this.inputAdress = page.getByLabel('Street address');
        this.inputApt = page.locator("//input[@name='address2']"); //getByLabel('Apt/Suite');
        this.inputCity = page.locator("//input[@name='city']"); //getByLabel('City');
        this.selectCountry = page.getByLabel('Country');
        this.selectState = page.getByLabel('Province/State');
        this.inputZIP = page.getByLabel('Postal/ZIP code');
        this.continueToPayment = page.getByRole('button', { name: 'Continue to payment' });

        // Card details form
        this.inputCardNumber = page.frameLocator('iframe').getByPlaceholder('Card number');
        this.inputMM_YY = page.frameLocator('iframe').getByPlaceholder('MM/YY');
        this.inputCVV = page.frameLocator('iframe').getByPlaceholder('CVV');
        this.placeOrder = page.getByRole('button', { name: 'Place order' });

        // Successful form
        this.orderSuccessMessage = page.getByRole('heading', { name: 'Thank you for your order' });
    }

    // Actions
    // Billing form
    
    async fillBillingForm(name, email, adress, apt, city, country, state, zip) {
        await this.inputName.fill(name);
        await this.inputEmail.fill(email);
        await this.inputAdress.fill(adress);
        await this.inputApt.fill(apt);
        await this.inputCity.fill(city);
        await this.selectCountry.click();
        await this.page.getByText(country).click();
        await this.selectState.click();
        await this.page.getByText(state).click();
        await this.inputZIP.fill(zip);
    }

    // Card details form
    
    async fillCardDetails(card_number, mmyy, cvv) {
        await this.inputCardNumber.fill(card_number);
        await this.inputMM_YY.fill(mmyy);
        await this.inputCVV.fill(cvv);
    }

    
    async verifyOrderSuccessMessage() {
        await expect(this.orderSuccessMessage).toBeVisible({ timeout: 10000 });
    }
}
