import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import "./carousel.scss";

import "./img/img1.png"
import "./img/img2.png"
import "./img/img3.png"

@Component({
    selector: "ctCarousel",
    template: `
  <div class="carousel">
    <div class="carousel-wrapper">
      <div class="carousel-overflow-wrapper">
        <div class="carousel-container"  [style.transform]="slideCarousel()">
          <div class="carousel-image-container">
            <img class="carousel-image-container__image" src="public/assets/img3.png" />
          </div>
          <div class="carousel-image-container">
            <img class="carousel-image-container__image" src="public/assets/img1.png" />
          </div>
          <div class="carousel-image-container">
            <img class="carousel-image-container__image" src="public/assets/img2.png" />
          </div>
          <div class="carousel-image-container">
            <img class="carousel-image-container__image" src="public/assets/img3.png" />
          </div>
          <div class="carousel-image-container">
            <img class="carousel-image-container__image" src="public/assets/img1.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-controls">
      <div (click)="leftSliding()" class="carousel-controls__left">
        <span class="icon icon-arrow-left"></span>
      </div>
      <div (click)="rightSliding()" class="carousel-controls__right">
        <span class="icon icon-arrow-right"></span>
      </div>
    </div>
</div>

  `
})

export default
class CarouselComponent {
    slideValue:Number = -17;

    slideCarousel() {
        return "translateX(" + this.slideValue + "%)";
    }

    rightSliding(event) {
        if (this.slideValue >= -35) {
            this.slideValue = this.slideValue - 18;
        }
    }

    leftSliding(event) {
        if (this.slideValue <= -35) {
            this.slideValue = this.slideValue + 18;
        }
    }
}
