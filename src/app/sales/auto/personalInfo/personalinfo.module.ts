
import { AutosalesdataService } from '../autosalesdata.service';
import { PersonalInfoComponent } from './personalInfo.component';
import { PersonalinfodataService } from './personalinfodata.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule, FormsModule, HttpModule],
  declarations: [PersonalInfoComponent],
  exports : [PersonalInfoComponent],
  providers : [PersonalinfodataService, AutosalesdataService],
})

export class personalInfoModule{}