import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import "./seat.scss";

@Component({
  selector: "ctSeat",
  template: `
  <div class="seat-wrapper">
    <div class="seat">
        <h2>2. seat</h2>

        <div class="shuttle">
          <div class="shuttle-root">
            <div class="shuttle-cabin">
              <div class="shuttle-seats"></div>
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
