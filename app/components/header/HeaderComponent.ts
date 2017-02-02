import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import "./header.scss";

@Component({
  selector: "ctHeader",
  template: `
    <header>
        <ul class="nav-menu">
            <li class="nav-menu-item"><a class="nav-menu__link" href="#">about</a></li>
            <li class="nav-menu-item"><a class="nav-menu__link" href="#">book tour</a></li>
            <li class="nav-menu-item"><a class="nav-menu__link" href="#">training</a></li>
            <li class="nav-menu-item"><a class="nav-menu__link" href="#">contact</a></li>
        </ul>

        <div class="logo" alt="cosmos tours logo"></div>
    </header>
  `
})
export default class HeaderComponent {

}
