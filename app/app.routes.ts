import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import RoutComponent from "./components/rout.component";
import HeaderComponent from "./components/header/header.component";
import FooterComponent from "./components/footer/footer.component";

const routes: Routes = [
  { path: "", component: RoutComponent},
]

export const ROUTER_MODULE: ModuleWithProviders = RouterModule.forRoot(routes);
