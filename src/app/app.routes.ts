import {Routes} from "@angular/router";
import {SALES_ROUTES} from "./sales/sales.route";
import {LandingComponent} from "./shared/landing/landing.component";

export const APP_ROUTES: Routes = [

  { path: '*', component: LandingComponent },
  ...SALES_ROUTES

];
