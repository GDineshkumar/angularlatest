import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {APP_ROUTES} from "./app.routes";
import {PersonalinfodataService} from "./sales/auto/personalInfo/personalinfodata.service";
import {SalesModule} from "./sales/sales.module";
import {RouterModule} from "@angular/router";
import {LandingComponent} from "./shared/landing/landing.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES),
    BrowserModule,
    FormsModule,
    HttpModule,
    SalesModule
  ],
  providers : [PersonalinfodataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
