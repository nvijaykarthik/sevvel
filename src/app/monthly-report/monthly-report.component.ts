import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from '../maintenance/maintenance.service';
import { FlatsService } from '../flats/flats.service';
import { Maintenance } from '../maintenance/maintenance.domains';
import { Flats } from '../flats/flats.domains';
import { ExpenceService } from '../expence/expence.service';
import { Expence } from '../expence/expence.domains';
import * as _ from 'underscore';
import { MonthlyReport, MonthlyReportSummary } from './monthly-report.domain';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-monthly-report',
  templateUrl: './monthly-report.component.html',
  styleUrls: ['./monthly-report.component.css']
})
export class MonthlyReportComponent implements OnInit {

  public month: number;
  public year: number;
  public months: number[] = [];
  public years: number[] = [];
  public error: boolean = false;
  public errorMessage: String = "";
  public maints: Maintenance[];
  public flats: Flats[];
  public expens: Expence[];
  public monthlyReport: MonthlyReport;
  public monthlyReports: any = {};
  public maintRepo: MonthlyReport[] = [];
  public monthlySummary: MonthlyReportSummary = new MonthlyReportSummary();
  constructor(
    private maintenanceService: MaintenanceService,
    private flatsService: FlatsService,
    private expenceService: ExpenceService) { }

  ngOnInit() {

    for (let index = 1; index <= 12; index++) {
      this.months.push(index);
    }
    for (let index = 2015; index < 2025; index++) {
      this.years.push(index);
    }
  }
  
 

  async submit(): Promise<void> {
    this.maints= [];
    this.flats= [];
    this.expens= [];
    this.maintRepo=[];
    this.error = false;
    if (typeof this.year === 'undefined' || this.year === null) {
      this.error = true;
      this.errorMessage = "Please select the year"
    }
    if (typeof this.month === 'undefined' || this.month === null) {
      this.error = true;
      this.errorMessage = "Please select the month"
    }
    
    this.flats = await this.flatsService.getAllFlatsAsync();
    this.maints = await this.maintenanceService.getByMonth(this.year, this.month)
    this.expens = await this.expenceService.getByMonth(this.year, this.month)

    this.flats=this.flats.filter(f=>f.number!=='Previous Balance');
    console.log(this.flats);
    this.flats.forEach(flat => {
      this.monthlyReport = new MonthlyReport(flat.number);
      this.monthlyReports[flat.number] = this.monthlyReport;
    })
    this.maints.forEach(maint => {
      var monthrepo = this.monthlyReports[maint.flatNumber];
      
      monthrepo.amount = maint.amount;
      monthrepo.date = maint.date;
      monthrepo.comment = maint.comment;
      this.monthlyReports[maint.flatNumber] = monthrepo;
    });

    for (var i in this.monthlyReports) {
      var repo = this.monthlyReports[i];
      this.maintRepo.push(repo);
    }

    this.monthlySummary.maintenanceCollection_Month = this.maints.reduce((sum, item) => sum + item.amount, 0);
    this.monthlySummary.expenditure_Month = this.expens.reduce((sum, item) => sum + item.amount, 0);
    this.monthlySummary.availableBalance_Month = this.monthlySummary.maintenanceCollection_Month - this.monthlySummary.expenditure_Month
    this.flatsService.getTotalCash()
    .subscribe(
      cash=>{
        this.monthlySummary.balance=cash.totalCash;
      },
      err=>
      {
        this.handleError(err);
      }
    );
    console.log(this.monthlySummary.balance);
  }
  handleError(err:any):void{
    this.error=true;
    this.errorMessage=err;
  }
}
