import { Component } from "@angular/core";
import { AUTH_PROVIDERS } from "angular2-jwt";

import { style } from "../app/styles/app.scss";

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
                  <ctDestination></ctDestination>
                </div>

                <main class="">
                  <router-outlet></router-outlet>
                </main>
                <footer ctFooter class="footer"></footer>
              </div>
            `,
  styleUrls: style
})
export class AppComponent {
  constructor() {

  }

}
