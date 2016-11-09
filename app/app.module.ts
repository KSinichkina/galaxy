import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideStore } from "@ngrx/store";
import { ROUTER_MODULE } from "./app.routes";

import { RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";
import { AUTH_PROVIDERS, JwtHelper } from "angular2-jwt";
import {APP_BASE_HREF} from '@angular/common';


import DestinationComponent from "./components/DestinationComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import SpaceportComponent from "./components/spaceport/SpaceportComponent";
import SeatComponent from "./components/seat/SeatComponent";
import FooterComponent from "./components/footer/FooterComponent";

import { root } from "./reducers/RootReducer";



@NgModule({
    declarations: [
      // components
        AppComponent,
        DestinationComponent,
        HeaderComponent,
        SpaceportComponent,
        SeatComponent,
        FooterComponent
      // directives
    ],
    imports: [
      BrowserModule,
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
