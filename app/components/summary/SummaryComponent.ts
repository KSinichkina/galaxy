import { Component } from "@angular/core";
import { Store } from "@ngrx/store";

import "./summary.scss";

@Component({
  selector: "ctSummary",
  template: `
  <div class="summary">
    <h2 class="summary__title">4. summary</h2>
    <div class="summary-wrapper">
      <div class="users-summary">
        <div class="users-info">
          <label class="users-info__label">First name</label>
          <input class="users-info__input" type="text"  pattern="[aA-zZ]*" [(ngModel)]="name" />
          <div class="validation-marker">
            <span class="icon-close"></span>
            <span class="icon-check"></span>
          </div>
        </div>

        <div class="users-info">
          <label class="users-info__label">Last name</label>
          <input class="users-info__input" type="text"  pattern="[aA-zZ]*" [(ngModel)]="lastname" />
          <div class="validation-marker">
            <span class="icon-close"></span>
            <span class="icon-check"></span>
           </div>
        </div>

        <div class="users-info">
          <label class="users-info__label">Email</label>
          <input class="users-info__input" type="email" pattern="[^ @]*@[^ @]*" [(ngModel)]="email" />
          <div class="validation-marker">
            <span class="icon-close"></span>
            <span class="icon-check"></span>
           </div>
        </div>

        <div class="users-info">
          <label class="users-info__label">Phone</label>
          <input class="users-info__input" type="number" pattern="[789][0-9]{9}" [(ngModel)]="phone" />
          <div class="validation-marker">
            <span class="icon-close"></span>
            <span class="icon-check"></span>
           </div>
        </div>
      </div>
      <div class="users-ticket">
          <div class="ticket-header">
            <div class="logo"></div>
            <div class="ticket">ticket</div>
          </div>

          <div class="tour-info">
            <h3 class="planet">Mars</h3>
            <div class="cosmodrom">CNR - Cape Canaveral</div>
            <div class="fly-date">January 20, 2055</div>
          </div>

          <div class="seat-number">Seat 3</div>
          <div class="name-info">
            <span class="last-name-info">{{ name }}</span>
            <span class="last-name-info">{{ lastname }}</span>
          </div>
          <div class="email-info">{{ email }}</div>
          <div class="phone-info">{{ phone }}</div>
        </div>
    </div>
    <input type="submit" class="continue__button" value="Continue" />
</div>
  `
})

export default class SummaryComponent {
}
