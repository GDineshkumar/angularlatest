import {QuotesummaryComponent} from './quotesummary.component';
import {Route} from '@angular/router';

export const QUOTE_SUMMARY_ROUTES: Route[] = [
  {
    path: 'quote',
    component: QuotesummaryComponent,
    outlet: 'autoFlow'
  }
];
