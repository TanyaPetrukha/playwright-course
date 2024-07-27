import { expect } from "@playwright/test";
export default class BillingForm {
    constructor(page) {
        this.page = page;
    }

    //Locators
    //billing form1
    inputName = () => this.page.getByLabel('Full name');
    inputEmail = () => this.page.getByLabel('Email');
    inputAdress = () => this.page.getByLabel('Street address');
    inputApt = () => this.page.getByLabel('Apt/Suite');
    inputCity = () => this.page.getByLabel('City');
    selectCountry = () => this.page.getByLabel('Country');
    selectState = () => this.page.getByLabel('Province/State');
    inputZIP = () => this.page.getByLabel('Postal/ZIP code');
    continueToPayment = () => this.page.getByRole('button', { name: 'Continue to payment' });

    //card details form
    inputCardNumber = () => this.page.frameLocator('iframe').getByPlaceholder('Card number');
    inputMM_YY = () => this.page.frameLocator('iframe').getByPlaceholder('MM/YY');
    inputCVV = () => this.page.frameLocator('iframe').getByPlaceholder('CVV');
    placeOrder = () => this.page.getByRole('button', { name: 'Place order' });


    // successful form
    orderSuccessMessage = () => this.page.getByRole('heading', { name: 'Thank you for your order' });

    //Actions
    //billing form
    fillBillingForm = async (name, email, adress, apt, city, country, state, zip) => {
        await this.inputName().fill(name);
        await this.inputEmail().fill(email);
        await this.inputAdress().fill(adress);
        await this.inputApt().fill(apt);
        await this.inputCity().fill(city);
        await this.selectCountry().click();
        await this.page.getByText(country).click();
        await this.selectState().click();
        await this.page.getByText(state).click();
        await this.inputZIP().fill(zip);
    }      
    //card details form
    fillCardDetails = async (card_number, mmyy, cvv) => {
        await this.inputCardNumber().click();
        await this.inputCardNumber().fill(card_number);
        await this.inputMM_YY().click();
        await this.inputMM_YY().fill(mmyy);
        await this.inputCVV().click();
        await this.inputCVV().fill(cvv);
    } 

    verifyOrderSuccessMessage = async () => {
        await expect(this.orderSuccessMessage()).toBeVisible({ timeout: 10000 });
    }
}
