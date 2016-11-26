import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import "./spaceport.scss";

@Component({
  selector: "ctSpaceport",
  template: `
  <div class="spaceport">
    <h2 class="spaceport__title">2. spaceport</h2>
    <div class="spaceport-wrapper">
        <div class="spaceport-list">
            <div class="spaceport-item is-active">
               <div class="icon-star"></div>
               <h3 class="spaceport-item__title">Cape canaveral</h3>
               <div class="spaceport-item__departure">Florida, United States</div>
               <div class="spaceport-item-fly-info">
                    <div class="spaceport-item__date">Jan 20, 2055</div>
                    <div class="spaceport-item__info">Nearest flight</div>
               </div>
            </div>
            <div class="spaceport-item">
               <div class="icon-star"></div>
               <h3 class="spaceport-item__title">Vandenberg</h3>
               <div class="spaceport-item__departure">Florida, United States</div>
               <div class="spaceport-item-fly-info">
                   <div class="spaceport-item__date">Apr 3, 2055</div>
                   <div class="spaceport-item__info">Nearest flight</div>
                </div>
            </div>
            <div class="spaceport-item">
               <div class="icon-star"></div>
               <h3 class="spaceport-item__title">Brownsville</h3>
               <div class="spaceport-item__departure">Texas, United States</div>
               <div class="spaceport-item-fly-info">
                   <div class="spaceport-item__date">Sep 7, 2055</div>
                   <div class="spaceport-item__info">Nearest flight</div>
                </div>
            </div>
        </div>
    </div>
</div>
  `
})
export default class SpaceportComponent {

}
