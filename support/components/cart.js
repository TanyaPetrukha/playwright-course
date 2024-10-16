import { expect } from "@playwright/test";

export class Cart {
  constructor(page) {
    this.page = page;
    this.titleCartform = page.getByRole('heading', { name: 'Cart summary' });
    this.continueShoppingButton = page.getByRole("button", {
      name: "Continue shopping",
    });
    this.incrementQuantityButton = this.page.getByLabel("Increment quantity");
    this.cartIcon = page.getByRole('link', { name: 'shopping_cart' });    
  }
  async incrementQuantity() {
    await this.incrementQuantityButton.click();
  }

  async openCart() {
    await this.cartIcon.click();
    await expect (this.titleCartform).toBeVisible({ timeout: 10000 });
  }

  decrementQuantity(title) {
    return this.page
      .locator("li")
      .filter({ hasText: title })
      .getByLabel('Decrement quantity');
  }

}
