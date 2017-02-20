import {NgModule} from "@angular/core";
import {TargetPremiumComponent} from "./target-premium.component";
import {AutosalesdataService} from "../autosalesdata.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [RouterModule, FormsModule, HttpModule],
  declarations: [TargetPremiumComponent],
  exports: [TargetPremiumComponent],
  providers: [AutosalesdataService],
})

export class TargetPremiumModule {
}
