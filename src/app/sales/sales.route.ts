import { SALES_AUTO_ROUTES } from './auto/auto.routes'
import { SalesComponent } from './sales.component';
import { Route } from '@angular/router';

export const SALES_ROUTES: Route[] = [
    {
      path: 'sales',
      component: SalesComponent,
      children: [
        ...SALES_AUTO_ROUTES
      ]
    }
];
