import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import "./seat.scss";

@Component({
  selector: "ctSeat",
  template: `
  <div class="seat">
    <h2 class="seat__title">2. seat</h2>
    <div class="seat-wrapper">
        <div class="shuttle">
          <div class="shuttle-root">
            <div class="shuttle-cabin"></div>
            <div class="shuttle-seats">
              <div class="shuttle-seats-block">
                <ul class="shuttle-seats__list">
                  <li class="shuttle-seats__item">1</li>
                  <li class="shuttle-seats__item">2</li>
                  <li class="shuttle-seats__item is-active">3</li>
                  <li class="shuttle-seats__item">4</li>
                  <li class="shuttle-seats__item">5</li>
                  <li class="shuttle-seats__item">6</li>
                  <li class="shuttle-seats__item">7</li>
                  <li class="shuttle-seats__item">8</li>
                </ul>
              </div>
              <div class="shuttle-door-up"></div>
              <div class="shuttle-door-down"></div>
            </div>
          </div>
        </div>
    </div>
</div>
  `
})
export default class SeatComponent {

}
