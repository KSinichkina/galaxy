import { Component } from "@angular/core";
import { AUTH_PROVIDERS } from "angular2-jwt";

import "../app/styles/app.scss";

import RoutComponent from "./components/RoutComponent";



@Component({
  selector: "[myApp]",
  providers: [

  ],
  template: `
              <div class="ct-layout">
                  <ctDestination></ctDestination>
                  <ctCarousel></ctCarousel>
                  <ctSpaceport></ctSpaceport>
                  <ctSeat></ctSeat>
                  <ctSummary></ctSummary>

                <main>
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
