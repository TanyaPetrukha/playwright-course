export default class Footer {
    constructor(page) {
        this.page = page
    }

    //Locators
    copyrights = () => this.page.locator('p.copyright');

    companyInfo = () => this.page.locator('li:has-text("Fur Many people have the")');
    generalSection = () => this.page.getByRole("heading", { name: "General" });
    helpSection = () => this.page.getByRole("heading", { name: "Help" });
    contactUsSection = () => this.page.getByRole("heading", { name: "Contact Us" });

    productsInGeneral = () => this.page.getByRole("contentinfo").getByRole("link", { name: "Products" });
    ourStoryInGeneral = () => this.page.getByRole("contentinfo").getByRole("link", { name: "Our Story" });
    contactInGeneral = () => this.page.getByRole("contentinfo").getByRole("link", { name: "Contact" })

    shippingInHelp = () => this.page.getByRole("link", { name: "Shipping" });
    returnsInHelp = () => this.page.getByRole("link", { name: "Returns" });

    getInTouch = () => this.page.getByRole("link", { name: "Get in touch" });
    emailInContact = () => this.page.getByRole("link", { name: "fur@example.com" });
    phoneInContact = () => this.page.getByRole("link", { name: "+1" });
    youtubeInContact = () => this.page.locator('a.youtube');
    linkedinInContact = () => this.page.locator('a.linkedin');
    instagramInContact = () => this.page.locator('a.instagram');

      //Actions

    clickOnProducts = async () => await this.productsInGeneral().click();
    clickOnOurStory = async () => await this.ourStoryInGeneral().click();
    clickOnContact = async () => await this.contactInGeneral().click();

    clickOnShipping = async () => await this.shippingInHelp().click();
    clickOnReturns = async () => await this.returnsInHelp().click();

    clickOnGetInTouch = async () => await this.getInTouch().click();
    clickOnYoutube = async () => await this.youtubeInContact().click();
    clickOnLinkedin = async () => await this.linkedinInContact().click();
    clickOnInstagram = async () => await this.instagramInContact().click();
    
}