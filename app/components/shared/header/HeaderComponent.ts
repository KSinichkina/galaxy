import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import "./header.scss";

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
            `
})
export default class HeaderComponent {

}
