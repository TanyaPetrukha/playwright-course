export class Cart {
    constructor(page) {
        this.page = page;
        this.titleCartform = page.getByRole("heading", { name: "Cart summary" });

    }
}

