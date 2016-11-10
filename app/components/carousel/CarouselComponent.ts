import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import "./carousel.scss";

@Component({
  selector: "ctCarousel",
  template: `
  <div class="carousel-wrapper">
    <div class="carousel">
      <div class="wr">
        <div class="wrap">
          <div class="y d"></div>
          <div class="r d"></div>
          <div class="b d"></div>
          <div class="g d"></div>
          <div class="y d"></div>
          <div class="r d"></div>
        </div>
      </div>
    </div>
</div>
  `
})
export default class CarouselComponent {

}
