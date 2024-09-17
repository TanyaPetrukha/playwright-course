import { urls } from "./urls";

export class ContactPage {
  constructor(page) {
    this.page = page;

    this.titleContactPage = page.getByRole("heading", { name: "Get in touch" });
    this.map = page.locator("#map");
    this.contactForm = page.locator("form.contact-form");

    this.inputName = page.getByPlaceholder("Enter your name...");
    this.inputEmail = page.getByPlaceholder("Enter your email...");
    this.inputMessage = page.getByPlaceholder("Enter your message...");

    this.sendMessageButton = page.getByRole("button", { name: "Send Message" });
  }


  async openContactPage() {
    await this.page.goto(urls.contact);
  }

  async fillContactForm(name, email, message) {
    await this.inputName.fill(name);
    await this.inputEmail.fill(email);
    await this.inputMessage.fill(message);
  }
}
