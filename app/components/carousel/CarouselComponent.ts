import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import "./carousel.scss";

@Component({
  selector: "ctCarousel",
  template: `
  <div class="carousel">
    <div class="carousel-wrapper">
      <div class="carousel-wrapper-visible">
        <div class="carousel-control" >
          <div (click)="leftSliding()"><div class="icon-arrow-left"></div></div>
          <div (click)="rightSliding()"><div class="icon-arrow-right"></div></div>
        </div>
        <div class="carousel-container"  [style.transform]="slideCarousel()">
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
  slideValue: Number = -11;

  slideCarousel () {
      return "translateX(" + this.slideValue + "%)";
  }

  leftSliding(event) {
    if (this.slideValue >= -37) {
      this.slideValue = this.slideValue  - 13;
    }
  }
  rightSliding(event) {
    if (this.slideValue <= -24) {
      this.slideValue = this.slideValue + 13;
    }
  }
}
