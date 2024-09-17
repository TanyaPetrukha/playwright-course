import { urls } from "./urls";

export class OurStoryPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.titleOurStoryPage = page.getByRole("heading", { name: "Our story" });

    // Employees
    this.infoAboutEmployees = page.getByText("Ava Sandler Steph Poco");
    this.avatarFirstEmployee = page
      .locator("li")
      .filter({ hasText: "Ava Sandler" })
      .locator("div")
      .first();
    this.nameFirstEmployee = page.getByText("Ava Sandler");
    this.avatarSecondEmployee = page
      .locator("li")
      .filter({ hasText: "Steph Poco" })
      .locator("div")
      .first();
    this.nameSecondEmployee = page.getByText("Steph Poco");

    // Paragraphs
    this.passionPar = page.getByRole("heading", { name: "Passion" });
    this.passionMeans = page.getByText("What more could you want from");

    this.animalPar = page.getByRole("heading", { name: "Animal" });
    this.animalMeans = page.getByText("It's easy to forget that we'");

    this.stylePar = page.getByRole("heading", { name: "Style" });
    this.styleMeans = page.getByText("We like to keep things plain");
  }


  async openOurStoryPage() {
    await this.page.goto(urls.ourStory);
  }
}
