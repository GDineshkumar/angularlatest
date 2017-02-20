import {AutoComponent} from './auto.component';
import {PERSONAL_INFO_ROUTES} from './personalInfo/personalInfo.routes';
import {QUOTE_SUMMARY_ROUTES} from './quotesummary/quotesummary.routes';
import {VEHICLE_LIST_ROUTES} from './vehicles/vehicles-list.routes';
import {Route} from "@angular/router";
import {TARGET_PREMIUM_ROUTES} from "./target-premium/target-premium.route";


export const SALES_AUTO_ROUTES: Route[] = [
  {
    path: 'auto',
    component: AutoComponent,
    children: [
      ...TARGET_PREMIUM_ROUTES,
      ...PERSONAL_INFO_ROUTES,
      ...QUOTE_SUMMARY_ROUTES,
      ...VEHICLE_LIST_ROUTES],
  }
];
