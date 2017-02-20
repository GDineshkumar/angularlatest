import { VehiclesComponent } from './vehicles-list.component';
import { Route } from '@angular/router';

export const VEHICLE_LIST_ROUTES: Route[] = [
    {
      path: 'vehicles',
      component: VehiclesComponent,
      outlet : 'autoFlow'
    }
];
