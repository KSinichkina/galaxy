import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import "./header.scss";
import "./img/mars.png";
import "./img/venus.png";
import "./img/europa.png";
import "./img/c-t-homepage-i-s.png";

@Component({
  selector: "ctHeader",
  template: `
  <div class="destination-wrapper">
    <header>
        <nav class="nav-menu">
            <a href="#">about</a>
            <a href="#">book tour</a>
            <a href="#">training</a>
            <a href="#">contact</a>
        </nav>

        <img src="public/c-t-homepage-i-s.png" class="logo" alt="cosmos tours logo" />
    </header>

    <div class="destination">
        <h2>1. Choose destination</h2>
        <ul class="destination-list">
            <li class="destination-item">
                <img src="public/venus.png" alt="venus destination"/>
                <div class="trip-title">
                  <div>venus</div>
                </div>
                <span class="trip-days">580 days</span>
            </li>
            <li class="destination-item">
                <img src="public/mars.png" alt="mars destination"/>
                <div class="trip-title">
                  <div>mars</div>
                </div>
                <span class="trip-days">600 days</span>
            </li>
            <li class="destination-item">
                <img src="public/europa.png" alt="europa destination"/>
                <div class="trip-title">
                  <div>europa</div>
                </div>
                <span class="trip-days">1320 days</span>
            </li>
        </ul>
    </div>
</div>
  `
})
export default class HeaderComponent {

}
