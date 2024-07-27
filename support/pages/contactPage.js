import { urls } from "./urls";

export default class ContactPage {
    constructor(page) {
        this.page = page;
    }

    //Locators

    titleContactPage = () => this.page.getByRole("heading", { name: "Get in touch" });
    map = () => this.page.locator("#map");
    contactForm = () => this.page.locator('form.contact-form');

    //    
    inputName = () => this.page.getByPlaceholder("Enter your name...");
    inputEmail = () => this.page.getByPlaceholder("Enter your email...");
    inputMessage = () => this.page.getByPlaceholder("Enter your message...");

    sendMessageButton = () => this.page.getByRole("button", { name: "Send Message" });

    //Actions
    openContactPage = async () => await this.page.goto(urls.contact);

    fillContactForm = async (name, email, message) => {
        await this.inputName().fill(name);
        await this.inputEmail().fill(email);
        await this.inputMessage().fill(message);
    }
}
