import { Component } from "@angular/core";
import { AUTH_PROVIDERS } from "angular2-jwt";

import HomeComponent from "./components/home/HomeComponent";


@Component({
  selector: "[myApp]",
  // directives: [
  // ],
  providers: [

  ],
  template: `
              <ctHeader></ctHeader>
              <div class="" bcSignIn></div>
              <main class="">
                <router-outlet></router-outlet>
              </main>
              <footer ctFooter class="footer"></footer>
            `,
  styles: [`


          `]
})
export class AppComponent {
  constructor() {

  }

}
