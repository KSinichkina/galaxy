import { Component } from "@angular/core";
import { AUTH_PROVIDERS } from "angular2-jwt";

import "../app/styles/app.scss";

import DestinationComponent from "./components/DestinationComponent";



@Component({
  selector: "[myApp]",
  // directives: [
  // ],
  providers: [

  ],
  template: `
              <div class="ct-wrapper">
                <div class="ct-destination-wrapper">
                  <ctHeader></ctHeader>
                  <ctCarousel></ctCarousel>
                  <ctDestination></ctDestination>
                  <ctSpaceport></ctSpaceport>
                  <ctSeat></ctSeat>
                  <ctSummary></ctSummary>
                </div>

                <main class="">
                  <router-outlet></router-outlet>
                </main>
                <footer ctFooter class="footer"></footer>
              </div>
            `
})
export class AppComponent {
  constructor() {

  }

}
