import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import "./destination.scss";
import "./img/mars.png";
import "./img/venus.png";
import "./img/europa.png";

@Component({
  selector: "ctDestination",
  template: `
  <div class="destination">
     <h2 class="destination__title">1. Choose destination</h2>
     <div class="destination-wrapper">
        <div class="destination-list">
            <div class="destination-item">
                <div class="rays"></div>
                <img class="destination-item__image" src="public/assets/venus.png" alt="venus destination"/>
                <div class="trip-title">
                  <div class="trip-title__text">venus</div>
                </div>
                <span class="trip-days">580 days</span>
            </div>
            <div class="destination-item is-active">
                <div class="rays"></div>
                <img class="destination-item__image" src="public/assets/mars.png" alt="mars destination"/>
                <div class="trip-title">
                  <div class="trip-title__text">mars</div>
                </div>
                <span class="trip-days">600 days</span>
            </div>
            <div class="destination-item">
                <div class="rays"></div>
                <img class="destination-item__image" src="public/assets/europa.png" alt="europa destination"/>
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
export default class DestinationComponent {

}
