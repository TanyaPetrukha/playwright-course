export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.titleProductsPage = page.getByRole("heading", {
      name: "Find your spirit animal",
    });

    //products titles
    this.deerShirt = page.locator("//a[normalize-space()='Sacha the Deer']");
    this.elephantShirt = page.locator(
      "//a[normalize-space()='Bumble the Elephant']"
    );
    this.giraffeShirt = page.locator(
      "//a[normalize-space()='Gerald the Giraffe']"
    );
    this.hedgehogShirt = page.locator(
      "//a[normalize-space()='Todd the Hedgehog']"
    );
    this.lionShirt = page.locator("//a[normalize-space()='Scar the Lion']");
    this.tigerShirt = page.locator("//a[normalize-space()='Gavin the Tiger']");

    //products prices
    this.priceDeer = page
      .locator("li")
      .filter({ hasText: "Sacha the Deer Sacha’s" })
      .getByRole("paragraph")
      .nth(1);
    this.priceElephant = page
      .locator("li")
      .filter({ hasText: "Bumble the Elephant Bumble" })
      .getByRole("paragraph")
      .nth(1);
    this.priceGiraffe = page
      .locator("li")
      .filter({ hasText: "Gerald the Giraffe Gerald the" })
      .getByRole("paragraph")
      .nth(1);
    this.priceHedgehog = page
      .locator("li")
      .filter({ hasText: "Todd the Hedgehog Todd the" })
      .getByRole("paragraph")
      .nth(1);
    this.priceLion = page
      .locator("li")
      .filter({ hasText: "Scar the Lion Scar the lion" })
      .getByRole("paragraph")
      .nth(1);
    this.priceTiger = page
      .locator("li")
      .filter({ hasText: "Gavin the Tiger Gavin the" })
      .getByRole("paragraph")
      .nth(1);

    //products images

    this.imgDeer = page.locator(".styles").first();
    this.imgElephant = page.locator("li:nth-child(2) > .styles");
    this.imgGiraffe = page.locator("li:nth-child(3) > .styles");
    this.imgHedgehog = page.locator("li:nth-child(4) > .styles");
    this.imgLion = page.locator("li:nth-child(5) > .styles");
    this.imgTiger = page.locator("li:nth-child(6) > .styles");

    //size and colors of products
    this.sizeShirt = page.locator("//select[@name='Size']"); //getByLabel('Size');
    this.colorShirt = page.locator("//select[@name='Color']"); //getByLabel('Color');

    //buttons
    this.addToCart = page.locator("//button[normalize-space()='Add to cart']"); //getByRole('button', { name: 'Add to cart' });
    this.checkout = page.locator("//div[@class='snipcart-base-button__label']"); //getByRole('button', { name: 'Checkout' });
  }

  getTitle(title) {
    return this.page.getByRole("link", { name: title });
  }

  getPrice(title) {
    return this.page
      .locator("li")
      .filter({ hasText: title })
      .getByRole("paragraph")
      .nth(1);
  }

  getImage(n) {
    return this.page.locator(`li:nth-child(${n}) > .styles`);
  }

  async openProductsPage() {
    await this.page.goto("/jekyll-ecommerce-demo/");
  }

  async scrollToFooter() {
    await this.page.evaluate(() =>
      window.scrollTo(0, document.body.scrollHeight)
    );
  }

  async setShirtParameters(size, color) {
    await this.sizeShirt.selectOption({ label: size });
    await this.colorShirt.selectOption({ label: color });
  }
}
