import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import RoutComponent from "./components/RoutComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";

const routes: Routes = [
  { path: "", component: RoutComponent},
]

export const ROUTER_MODULE: ModuleWithProviders = RouterModule.forRoot(routes);
