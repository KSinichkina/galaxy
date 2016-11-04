import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import DestinationComponent from "./components/DestinationComponent";
import HeaderComponent from "./components/shared/header/HeaderComponent";
import FooterComponent from "./components/shared/footer/FooterComponent";

const routes: Routes = [
  { path: "", component: DestinationComponent},
]

export const ROUTER_MODULE: ModuleWithProviders = RouterModule.forRoot(routes);
