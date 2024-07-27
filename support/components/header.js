export default class Header {
    constructor(page){
      this.page = page
    }
  
    // Locators
    furIcon = () => this.page.getByRole("link", { name: "Fur", exact: true });
    productsSection = () => this.page.getByRole("navigation").getByRole("link", { name: "Products" });
    ourStorySection = () => this.page.getByRole("navigation").getByRole("link", { name: "Our Story" });
    contactSection = () => this.page.getByRole("navigation").getByRole("link", { name: "Contact" });
    cartIcon = () => this.page.getByRole('link', { name: 'shopping_cart' });
  
    // Actions
    clickOnFurIcon = async () => await this.furIcon().click();
    clickOnProductsSection = async () => await this.productsSection().click();
    clickOnOurStorySection = async () => await this.ourStorySection().click();
    clickOnContactSection = async () => await this.contactSection().click();
    clickOnCartIcon = async () => await this.cartIcon().click();
  }
  