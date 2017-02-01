import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import "./seat.scss";

@Component({
  selector: "ctSeat",
  template: `
  <div class="seat">
    <h2 class="seat__title">3. seat</h2>
    <div class="seat-wrapper">
        <div class="shuttle is-desktop">
          <div class="shuttle-root">
            <div class="shuttle-cabin"></div>
            <div class="shuttle-seat">
              <div class="shuttle-seat-block">
                <ul class="shuttle-seat__list">
                  <li class="shuttle-seat__item">1</li>
                  <li class="shuttle-seat__item">2</li>
                  <li class="shuttle-seat__item is-active">3</li>
                  <li class="shuttle-seat__item">4</li>
                  <li class="shuttle-seat__item">5</li>
                  <li class="shuttle-seat__item">6</li>
                  <li class="shuttle-seat__item">7</li>
                  <li class="shuttle-seat__item">8</li>
                </ul>
              </div>
              <div class="shuttle-door-up"></div>
              <div class="shuttle-door-down"></div>
            </div>
          </div>
        </div>
        <div class="shuttle is-mobile">
          <div class="shuttle-root">
            <div class="shuttle-seat">
              <div class="shuttle-seat-block">
                <ul class="shuttle-seat__list">
                  <li class="shuttle-seat__item">1</li>
                  <li class="shuttle-seat__item">2</li>
                  <li class="shuttle-seat__item is-active">3</li>
                  <li class="shuttle-seat__item">4</li>
                  <li class="shuttle-seat__item">5</li>
                  <li class="shuttle-seat__item">6</li>
                  <li class="shuttle-seat__item">7</li>
                  <li class="shuttle-seat__item">8</li>
                </ul>
              </div>
              <div class="shuttle-door-up"></div>
              <div class="shuttle-door-down"></div>
            </div>
            <div class="shuttle-cabin"></div>
          </div>
        </div>
    </div>
</div>
  `
})
export default class SeatComponent {

}
