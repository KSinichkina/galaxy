import { Component } from "@angular/core";
import { AUTH_PROVIDERS } from "angular2-jwt";

import "./styles/app.scss";

import RoutComponent from "./components/rout.component";



@Component({
  selector: "[myApp]",
  providers: [

  ],
  template: `
              <div class="ct-layout">
                  <ct-header></ct-header>
                  <ct-destination></ct-destination>
                  <ct-carousel></ct-carousel>
                  <ct-spaceport></ct-spaceport>
                  <ct-seat></ct-seat>
                  <ct-summary></ct-summary>

                <main>
                  <router-outlet></router-outlet>
                </main>
                <footer ct-footer class="footer"></footer>
              </div>
            `
})
export class AppComponent {
  constructor() {

  }
}
