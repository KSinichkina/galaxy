import { Component } from "@angular/core";
// import { ROUTER_DIRECTIVES } from '@angular/router';
import { Store } from "@ngrx/store";

@Component({
  selector: "ctHeader",
  // directives: [
  //   ROUTER_DIRECTIVES,
  //   AuthComponent
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
  styles: [
    `
      .nav-menu {
        a {
          text-transform: uppercase;
        }
      }
    `
  ]
})
export default class HeaderComponent {

  constructor(
    private _store: Store<any>
  ) {
  }

}
