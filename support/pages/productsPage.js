import { urls } from "./urls";

export default class ProductsPage {
    constructor(page) {
        this.page = page;
    }

    // Locators

    titleProductsPage = () => this.page.getByRole("heading", { name: "Find your spirit animal" });


    //products titles
    deerShirt = () => this.page.getByRole('link', { name: 'Sacha the Deer' });
    elephantShirt = () => this.page.getByRole('link', { name: 'Bumble the Elephant' });
    giraffeShirt = () => this.page.getByRole('link', { name: 'Gerald the Giraffe' });
    hedgehogShirt = () => this.page.getByRole('link', { name: 'Todd the Hedgehog' });
    lionShirt = () => this.page.getByRole('link', { name: 'Scar the Lion' });
    tigerShirt = () => this.page.getByRole('link', { name: 'Gavin the Tiger' });

    //products prices
    priceDeer = () => this.page.locator('li').filter({ hasText: 'Sacha the Deer Sacha’s' }).getByRole('paragraph').nth(1);
    priceElephant = () => this.page.locator('li').filter({ hasText: 'Bumble the Elephant Bumble' }).getByRole('paragraph').nth(1);
    priceGiraffe = () => this.page.locator('li').filter({ hasText: 'Gerald the Giraffe Gerald the' }).getByRole('paragraph').nth(1);
    priceHedgehog = () => this.page.locator('li').filter({ hasText: 'Todd the Hedgehog Todd the' }).getByRole('paragraph').nth(1);
    priceLion = () => this.page.locator('li').filter({ hasText: 'Scar the Lion Scar the lion' }).getByRole('paragraph').nth(1);
    priceTiger = () => this.page.locator('li').filter({ hasText: 'Gavin the Tiger Gavin the' }).getByRole('paragraph').nth(1);

    //products images

    imgDeer = () => this.page.locator(".styles").first();
    imgElephant = () => this.page.locator("li:nth-child(2) > .styles");
    imgGiraffe = () => this.page.locator("li:nth-child(3) > .styles");
    imgHedgehog = () => this.page.locator("li:nth-child(4) > .styles");
    imgLion = () => this.page.locator("li:nth-child(5) > .styles");
    imgTiger = () => this.page.locator("li:nth-child(6) > .styles");

    //size and colors of products
    sizeDeer = () => this.page.getByLabel('Size');
    colorDeer = () => this.page.getByLabel('Color');

    //buttons
    addToCart = () => this.page.getByRole('button', { name: 'Add to cart' });
    checkout = () => this.page.getByRole('button', { name: 'Checkout' });

    // Actions 
    //with page
    openProductsPage = async () => await this.page.goto(urls.products);
    scrollToFooter = async () => await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    //with products
    deerShirtParameters = async (size, color) => {
        await this.sizeDeer().selectOption({ label: size });
        await this.colorDeer().selectOption({ label: color });
    }
}
