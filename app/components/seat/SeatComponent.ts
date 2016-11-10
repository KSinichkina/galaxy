import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import "./seat.scss";

@Component({
  selector: "ctSeat",
  template: `
  <div class="seat-wrapper">
    <h2>2. seat</h2>
    <div class="seat">
        <div class="shuttle">
          <div class="shuttle-root">
            <div class="shuttle-cabin"></div>
            <div class="shuttle-seats">
              <div class="shuttle-seats-block">
                <ul class="shuttle-seats__list">
                  <li>1</li>
                  <li>2</li>
                  <li class="active">3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
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
