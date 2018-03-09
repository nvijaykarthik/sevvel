import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FlatsComponent } from './flats/flats.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ExpenceComponent } from './expence/expence.component';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';
import { FlatsReportComponent } from './flats-report/flats-report.component';
import { FlatsService } from './flats/flats.service';
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
    HttpClientModule
  ],
  providers: [FlatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
