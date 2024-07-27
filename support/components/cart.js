export default class Cart {
    constructor(page) {
        this.page = page;
    }

    // Locators
    titleCartform = () => this.page.getByRole("heading", { name: "Cart summary" });

}