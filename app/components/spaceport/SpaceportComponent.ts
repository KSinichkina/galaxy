import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import "./spaceport.scss";
//import "./../../assets/svg/icon-star.svg";

@Component({
  selector: "ctSpaceport",
  template: `
  <div class="spaceport-wrapper">
    <h2>2. spaceport</h2>
    <div class="spaceport">
        <div class="spaceport-list">
            <div class="spaceport-item active">
               <div class="icon-star"></div>
               <h3 class="spaceport-item__title">Cape canaveral</h3>
               <div class="spaceport-item__dep">Florida, United States</div>
               <div class="spaceport-item__date">Jan 20, 2055</div>
               <div class="spaceport-item__info">Nearest flight</div>
            </div>
            <div class="spaceport-item">
               <!--<svg class="icon"><use xlink:href="#icon-star" /></svg>-->
               <div class="icon-star"></div>
               <h3 class="spaceport-item__title">Vandenberg</h3>
               <div class="spaceport-item__dep">Florida, United States</div>
               <div class="spaceport-item__date">Apr 3, 2055</div>
               <div class="spaceport-item__info">Nearest flight</div>
            </div>
            <div class="spaceport-item">
               <div class="icon-star"></div>
               <h3 class="spaceport-item__title">Brownsville</h3>
               <div class="spaceport-item__dep">Texas, United States</div>
               <div class="spaceport-item__date">Sep 7, 2055</div>
               <div class="spaceport-item__info">Nearest flight</div>
            </div>
        </div>
    </div>
</div>
  `
})
export default class SpaceportComponent {

}
