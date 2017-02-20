import {Route} from "@angular/router";
import {TargetPremiumComponent} from "./target-premium.component";

export const TARGET_PREMIUM_ROUTES: Route[] = [

  {
    path: 'target-premium',
    component: TargetPremiumComponent,
    outlet: 'autoFlow'
  }

];
