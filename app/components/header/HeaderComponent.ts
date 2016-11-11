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
            <a href="#">about</a>
            <a href="#">book tour</a>
            <a href="#">training</a>
            <a href="#">contact</a>
        </nav>

        <div class="logo" alt="cosmos tours logo"></div>
    </header>

    <h2>1. Choose destination</h2>

    <div class="destination">
        <div class="destination-list">
            <div class="destination-item">
                <img src="public/assets/venus.png" alt="venus destination"/>
                <div class="trip-title">
                  <div>venus</div>
                </div>
                <span class="trip-days">580 days</span>
            </div>
            <div class="destination-item">
                <img src="public/assets/mars.png" alt="mars destination"/>
                <div class="trip-title">
                  <div>mars</div>
                </div>
                <span class="trip-days">600 days</span>
            </div>
            <div class="destination-item">
                <img src="public/assets/europa.png" alt="europa destination"/>
                <div class="trip-title">
                  <div>europa</div>
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
