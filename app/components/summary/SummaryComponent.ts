import { Component } from "@angular/core";
import { Store } from "@ngrx/store";

import "./summary.scss";

@Component({
  selector: "ctSummary",
  template: `
  <div class="summary-wrapper">
     <div class="summary">
      <h2>2. summary</h2>
      <div class="users-summary">
        <div class="users-info">
          <label>First name</label>
          <input type="text"  pattern="[aA-zZ]*" [(ngModel)]="name" />
          <div class="marker">
        </div>

        <div class="users-info">
          <label>Last name</label>
          <input type="text"  pattern="[aA-zZ]*" [(ngModel)]="lastname" />
          <div class="marker"></div>
        </div>

        <div class="users-info">
          <label>Email</label>
          <input type="email" pattern="[^ @]*@[^ @]*" [(ngModel)]="email" />
          <div class="marker"></div>
        </div>

        <div class="users-info">
          <label>Phone</label>
          <input type="number" pattern="[789][0-9]{9}" [(ngModel)]="phone" />
          <div class="marker"></div>
        </div>
      </div>
      <div class="users-ticket">
          <div class="ticket-header">
            <div class="logo"></div>
            <div class="ticket">ticket</div>
          </div>

          <div class="ticket-header">
            <div class="logo"></div>
            <div class="ticket">ticket</div>
          </div>

          <div class="seat-info"></div>
          <div class="name-info">
            <span class="last-name-info">{{ name }}</span>
            <span class="last-name-info">{{ lastname }}</span>
          </div>
          <div class="email-info">{{ email }}</div>
          <div class="phone-info">{{ phone }}</div>
        </div>
      <input type="submit" class="continue__btn" value="Continue" />
    </div>
</div>
  `
})

export default class SummaryComponent {
}
