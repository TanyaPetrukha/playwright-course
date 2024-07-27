import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://ilarionhalushka.github.io/jekyll-ecommerce-demo/");
  // Скролимо до кінця сторінки
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
});

test("footer has logo with info about shop, sections, copyright", async ({
  page,
}) => {
  await expect(
    page.locator('li:has-text("Fur Many people have the")')
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "General" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Help" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Contact Us" })).toBeVisible();
  await expect(page.locator("footer")).toHaveText(
    /All Rights Reserved © \d{4}/
  );
});

test("General section has navigation", async ({ page }) => {
  await expect(
    page.getByRole("contentinfo").getByRole("link", { name: "Products" })
  ).toBeVisible();
  await expect(
    page.getByRole("contentinfo").getByRole("link", { name: "Our Story" })
  ).toBeVisible();
  await expect(
    page.getByRole("contentinfo").getByRole("link", { name: "Contact" })
  ).toBeVisible();
});

test("Help section has navigation", async ({ page }) => {
  await expect(page.getByRole("link", { name: "Shipping" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Returns" })).toBeVisible();
});

test("Contact Us section has navigation", async ({ page }) => {
  await expect(page.getByText("Need help with something? Get")).toBeVisible();
  await expect(page.getByRole("link", { name: "Get in touch" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "fur@example.com" })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "+1" })).toBeVisible();
  await expect(
    page
      .locator("li")
      .filter({ hasText: "Contact Us Need help with" })
      .locator("div")
      .getByRole("link")
      .first()
  ).toBeVisible();
  await expect(
    page
      .locator("li")
      .filter({ hasText: "Contact Us Need help with" })
      .locator("div")
      .getByRole("link")
      .nth(1)
  ).toBeVisible();
  await expect(
    page
      .locator("li")
      .filter({ hasText: "Contact Us Need help with" })
      .locator("div")
      .getByRole("link")
      .nth(2)
  ).toBeVisible();
});

test("footer year matches current year", async ({ page }) => {
  // Отримую поточний рік
  const currentYear = new Date().getFullYear();

  // Знаходжу елемент футера, що містить текст з роком
  const footer = await page.getByText(/All Rights Reserved © \d{4}/);
  //\d{4} — регулярний вираз, що відповідає чотирьом цифрам, тобто року у форматі "yyyy".
  // \d представляє цифру, а {4} вказує на те, що потрібно саме чотири цифри.

  // Отримуєю текст з футера
  const footerText = await footer.textContent();

  // Перевіряю, що текст футера містить поточний рік
  expect(footerText).toContain(`© ${currentYear}`);
});

test("links in General section", async ({ page }) => {
  await page
    .getByRole("contentinfo")
    .getByRole("link", { name: "Products" })
    .click();
  await expect(page).toHaveURL(
    "https://ilarionhalushka.github.io/jekyll-ecommerce-demo/"
  );
  await page
    .getByRole("contentinfo")
    .getByRole("link", { name: "Our Story" })
    .click();
  await expect(page).toHaveURL(
    "https://ilarionhalushka.github.io/jekyll-ecommerce-demo/about/"
  );
  await page
    .getByRole("contentinfo")
    .getByRole("link", { name: "Contact" })
    .click();
  await expect(page).toHaveURL(
    "https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact/"
  );
});

test("links in Help section", async ({ page }) => {
  await page.getByRole("link", { name: "Shipping" }).click();
  await expect(page).toHaveURL(
    "https://ilarionhalushka.github.io/jekyll-ecommerce-demo/shipping/"
  );
  await page.getByRole("link", { name: "Returns" }).click();
  await expect(page).toHaveURL(
    "https://ilarionhalushka.github.io/jekyll-ecommerce-demo/returns/"
  );
});

test("links Contact Us section", async ({ page, context }) => {
  await page.getByRole("link", { name: "Get in touch" }).click();
  await expect(page).toHaveURL(/.*contact/);

  // Click on the first link (YouTube)
  const [newPage1] = await Promise.all([
    context.waitForEvent('page'),
    page
      .locator("li")
      .filter({ hasText: "Contact Us Need help with" })
      .locator("div")
      .getByRole("link")
      .first()
      .click()
  ]);
  await newPage1.waitForLoadState();
  await expect(newPage1).toHaveURL(/.*youtube/);
  await newPage1.close();

  const [newPage2] = await Promise.all([
    context.waitForEvent('page'),
    page
      .locator("li")
      .filter({ hasText: "Contact Us Need help with" })
      .locator("div")
      .getByRole("link")
      .nth(1)
      .click()
  ]);
  await newPage2.waitForLoadState();
  await expect(newPage2).toHaveURL(/.*linkedin/);
  await newPage2.close();

  const [newPage3] = await Promise.all([
    context.waitForEvent('page'),
    page
      .locator("li")
      .filter({ hasText: "Contact Us Need help with" })
      .locator("div")
      .getByRole("link")
      .nth(2)
      .click()
  ]);
  await newPage3.waitForLoadState();
  await expect(newPage3).toHaveURL(/.*instagram/);
  await newPage3.close();
});
