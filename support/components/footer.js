export class Footer {
  constructor(page) {
    this.page = page;
    this.copyrights = page.locator("p.copyright");

    this.companyInfo = page.locator('li:has-text("Fur Many people have the")');
    this.generalSection = page.getByRole("heading", { name: "General" });
    this.helpSection = page.getByRole("heading", { name: "Help" });
    this.contactUsSection = page.getByRole("heading", { name: "Contact Us" });

    this.productsInGeneral = page
      .getByRole("contentinfo")
      .getByRole("link", { name: "Products" });
    this.ourStoryInGeneral = page
      .getByRole("contentinfo")
      .getByRole("link", { name: "Our Story" });
    this.contactInGeneral = page
      .getByRole("contentinfo")
      .getByRole("link", { name: "Contact" });

    this.shippingInHelp = page.getByRole("link", { name: "Shipping" });
    this.returnsInHelp = page.getByRole("link", { name: "Returns" });

    this.getInTouch = page.getByRole("link", { name: "Get in touch" });
    this.emailInContact = page.getByRole("link", { name: "fur@example.com" });
    this.phoneInContact = page.getByRole("link", { name: "+1" });
    this.youtubeInContact = page.locator("a.youtube");
    this.linkedinInContact = page.locator("a.linkedin");
    this.instagramInContact = page.locator("a.instagram");
  }

  //Actions
  async clickOnProducts() {
    await this.productsInGeneral.click();
  }


  async clickOnOurStory() {
    await this.ourStoryInGeneral.click();
  }


  async clickOnContact() {
    await this.contactInGeneral.click();
  }

  async clickOnShipping() {
    await this.shippingInHelp.click();
  }


  async clickOnReturns() {
    await this.returnsInHelp.click();
  }


  async clickOnGetInTouch() {
    await this.getInTouch.click();
  }


  async clickOnYoutube() {
    await this.youtubeInContact.click();
  }

  async clickOnLinkedin() {
    await this.linkedinInContact.click();
  }


  async clickOnInstagram() {
    await this.instagramInContact.click();
  }
}
