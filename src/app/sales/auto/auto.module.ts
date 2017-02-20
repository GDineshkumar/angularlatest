import {AutoComponent} from "./auto.component";
import {AutosalesdataService} from "./autosalesdata.service";
import {PersonalInfoModule} from "./personalInfo/personalinfo.module";
import {QuoteSummaryModule} from "./quotesummary/quotesummary.module";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {VehicleModule} from "./vehicles/vehilce-list.module";
import {TargetPremiumModule} from "./target-premium/target-premium.module";

@NgModule({
  imports: [RouterModule, TargetPremiumModule, PersonalInfoModule, HttpModule, QuoteSummaryModule, VehicleModule],
  declarations: [AutoComponent],
  exports: [AutoComponent],
  providers : [AutosalesdataService],
})

export class AutoModule { }
