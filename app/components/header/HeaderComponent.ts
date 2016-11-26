import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import "./header.scss";

@Component({
  selector: "ctHeader",
  template: `
    <header>
        <nav class="nav-menu">
            <a class="nav-menu__item" href="#">about</a>
            <a class="nav-menu__item" href="#">book tour</a>
            <a class="nav-menu__item" href="#">training</a>
            <a class="nav-menu__item" href="#">contact</a>
        </nav>

        <div class="logo" alt="cosmos tours logo"></div>
    </header>
  `
})
export default class HeaderComponent {

}
