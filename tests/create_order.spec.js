import { test} from "@playwright/test";
import { ProductsPage } from "../support/pages/productsPage";
import { BillingForm } from "../support/components/billingForm";

test.beforeEach(async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.openProductsPage();
});

test('create an order should display success page with order details', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const billingForm = new BillingForm (page);

    await productsPage.deerShirt.click();
    await productsPage.addToCart.click();

    await productsPage.deerShirtParameters('Small', 'Black');
    await productsPage.checkout.click();

    await billingForm.fillBillingForm('Joe Fournier','Fournier@jourr.apide','Holly Trail','555','Bracey','United States','Alabama', '23927');
    await billingForm.continueToPayment.click();

    await billingForm.fillCardDetails('4242 4242 4242 42424', '08/26', '123');
    await billingForm.placeOrder.click();

    await billingForm.verifyOrderSuccessMessage();

});