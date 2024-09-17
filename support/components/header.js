export class Header {
  constructor(page) {
    this.page = page;
    this.furIcon = page.getByRole("link", { name: "Fur", exact: true });
    this.productsSection = page
      .getByRole("navigation")
      .getByRole("link", { name: "Products" });
    this.ourStorySection = page
      .getByRole("navigation")
      .getByRole("link", { name: "Our Story" });
    this.contactSection = page
      .getByRole("navigation")
      .getByRole("link", { name: "Contact" });
    this.cartIcon = page.getByRole("link", { name: "shopping_cart" });
  }


  async clickOnFurIcon() {
    await this.furIcon.click();
  }


  async clickOnProductsSection() {
    await this.productsSection.click();
  }


  async clickOnOurStorySection() {
    await this.ourStorySection.click();
  }


  async clickOnContactSection() {
    await this.contactSection.click();
  }


  async clickOnCartIcon() {
    await this.cartIcon.click();
  }
}
