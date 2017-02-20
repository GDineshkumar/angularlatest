import {PersonalInfoComponent} from './personalInfo.component';
import {Route} from '@angular/router';

export const PERSONAL_INFO_ROUTES: Route[] = [
  {
    path: 'personal-info',
    component: PersonalInfoComponent,
    outlet: 'autoFlow'
  }
];
