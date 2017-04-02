import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { provideStore } from "@ngrx/store";
import { ROUTER_MODULE } from "./app.routes";

import { RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";
import { AUTH_PROVIDERS, JwtHelper } from "angular2-jwt";
import { APP_BASE_HREF } from '@angular/common';

import DestinationComponent from "./components/destination/destination.component";
import RoutComponent from "./components/rout.component";
import HeaderComponent from "./components/header/header.component";
import CarouselComponent from "./components/carousel/carousel.component";
import SpaceportComponent from "./components/spaceport/spaceport.component";
import SeatComponent from "./components/seat/seat.component";
import SummaryComponent from "./components/summary/summary.component";
import FooterComponent from "./components/footer/footer.component";

import { root } from "./reducers/root.reducer";



@NgModule({
    declarations: [
      // components
        AppComponent,
        DestinationComponent,
        HeaderComponent,
        CarouselComponent,
        SpaceportComponent,
        SeatComponent,
        SummaryComponent,
        FooterComponent,
        RoutComponent
      // directives
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      ROUTER_MODULE
    ],
    providers: [
      AUTH_PROVIDERS,
      JwtHelper,
      provideStore(root)
    ],
    bootstrap:    [AppComponent]
})
export class AppModule {}
