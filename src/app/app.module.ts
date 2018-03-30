import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 

import { AppComponent } from './app.component';
import { FlatsComponent } from './flats/flats.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ExpenceComponent } from './expence/expence.component';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';
import { FlatsReportComponent } from './flats-report/flats-report.component';
import { FlatsService } from './flats/flats.service';
import { MaintenanceService } from './maintenance/maintenance.service';
import { ExpenceService } from './expence/expence.service';
import { PagerService } from './app.pager.service';

const appRoutes: Routes = [
  { path: 'flats', component: FlatsComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'expence', component: ExpenceComponent },
  { path: 'monthlyReport', component: MonthlyReportComponent },
  { path: 'flatsReport', component: FlatsReportComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FlatsComponent,
    NavBarComponent,
    MaintenanceComponent,
    ExpenceComponent,
    MonthlyReportComponent,
    FlatsReportComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    Ng2SearchPipeModule

  ],
  providers: [FlatsService,MaintenanceService,ExpenceService,PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
