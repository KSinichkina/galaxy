import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import "./carousel.scss";

@Component({
  selector: "ctCarousel",
  template: `
  <div class="carousel-wrapper">
    <div class="carousel">
      <div class="wr">
        <div>
          <div (click)="left()">L</div>
          <div (click)="right()">R</div>
        </div>
        <div class="wrap" styled>
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
  //public param: Number;

  left(event) {
    //param = -24;
    //$('.wrap').css({'transform': 'translateX(-24%);'});
    console.log('left');
  }
  right(event) {
    console.log('right');
  }
}
