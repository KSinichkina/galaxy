import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { style } from "../../../styles/header.scss";

@Component({
  selector: "ctHeader",
  // directives: [
  // ],
  template: `
              <header>
                <nav class="nav-menu">
                  <a href="#">about</a>
                  <a href="#">book tour</a>
                  <a href="#">training</a>
                  <a href="#">contact</a>
                </nav>
              </header>
            `,
  styleUrls: style
})
export default class HeaderComponent {

}
