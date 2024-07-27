import { urls } from "../../support/pages/urls";

export default class OurStoryPage {
    constructor(page) {
        this.page = page;
    }

    //Locators
    titleOurStoryPage = () => this.page.getByRole("heading", { name: "Our story" });
    
    //employees
    infoAboutEmployees = () => this.page.getByText('Ava Sandler Steph Poco');
    avatarFirstEmployee = () => this.page.locator("li").filter({ hasText: "Ava Sandler" }).locator("div").first();
    nameFirstEmployee = () => this.page.getByText("Ava Sandler");
    avatarSecondEmployee = () => this.page.locator("li").filter({ hasText: "Steph Poco" }).locator("div").first();
    nameSecondEmployee = () => this.page.getByText("Steph Poco");

    //paragraphs

    passionPar = () => this.page.getByRole("heading", { name: "Passion" });
    passionMeans = () => this.page.getByText("What more could you want from");
      
    animalPar = () => this.page.getByRole("heading", { name: "Animal" });
    animalMeans = () => this.page.getByText("It's easy to forget that we'");
      
    stylePar = () => this.page.getByRole("heading", { name: "Style" });
    styleMeans = () => this.page.getByText("We like to keep things plain");

    //Actions
    openOurStoryPage = async () => await this.page.goto(urls.ourStory);

}
