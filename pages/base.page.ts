import { Page } from "../utils/fixture";
import { NavbarComponent } from "../components/navbar.component";

export class BasePage {
  readonly page: Page;
  readonly navbar: NavbarComponent

  constructor(page: Page) {
    this.page = page;
    this.navbar = new NavbarComponent(page);
  }
}