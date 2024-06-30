import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://rozetka.com.ua/ua/");
  await page.getByRole("button", { name: "Ні, дякую" }).click();
  await page.getByRole("link", { name: "Смартфони, ТВ і електроніка" }).click();
  await page.locator(".exponea-close-cross").click();
  await page.getByRole("link", { name: "QLED-телевізори QLED" }).click();
  await page.getByRole("link", { name: "Sony  (4)" }).click();
  await page
    .locator("a")
    .filter({ hasText: 'Телевізор " Sony OLED XR77A80L' })
    .click();
  await page.getByRole("link", { name: "Характеристики", exact: true }).click();
  await page.getByRole("link", { name: "Усе про товар" }).click();
  await page.getByRole("link", { name: "Телевізори Sony" }).click();
});
