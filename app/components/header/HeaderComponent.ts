import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import "./header.scss";
import "./img/mars.png";
import "./img/venus.png";
import "./img/europa.png";

@Component({
  selector: "ctHeader",
  template: `
  <div class="destination-wrapper">
    <header>
        <nav class="nav-menu">
            <a class="nav-menu__item" href="#">about</a>
            <a class="nav-menu__item" href="#">book tour</a>
            <a class="nav-menu__item" href="#">training</a>
            <a class="nav-menu__item" href="#">contact</a>
        </nav>

        <div class="logo" alt="cosmos tours logo"></div>
    </header>

    <h2 class="destination__title">1. Choose destination</h2>

    <div class="destination">
        <div class="destination-list">
            <div class="destination-item">
                <img src="public/assets/venus.png" alt="venus destination"/>
                <div class="trip-title">
                  <div class="trip-title__text">venus</div>
                </div>
                <span class="trip-days">580 days</span>
            </div>
            <div class="destination-item">
                <img src="public/assets/mars.png" alt="mars destination"/>
                <div class="trip-title">
                  <div class="trip-title__text">mars</div>
                </div>
                <span class="trip-days">600 days</span>
            </div>
            <div class="destination-item">
                <img src="public/assets/europa.png" alt="europa destination"/>
                <div class="trip-title">
                  <div class="trip-title__text">europa</div>
                </div>
                <span class="trip-days">1320 days</span>
            </div>
        </div>
    </div>
</div>
  `
})
export default class HeaderComponent {

}
