import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from '../maintenance/maintenance.service';
import { FlatsService } from '../flats/flats.service';
import { Maintenance, MaintenanceDetail} from '../maintenance/maintenance.domains';
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
  public maints: Maintenance;
  public maintsTenure: MaintenanceDetail[]=[];
  public flats: Flats[];
  public expens: Expence[];
  public monthlyReport: MonthlyReport;
  public monthlyReports: any = {};
  public maintRepo: MonthlyReport[] = [];
  public monthlySummary: MonthlyReportSummary = new MonthlyReportSummary();
  public tenure:number=3;
  public maintenanceDetail:MaintenanceDetail[]=[]

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
    this.maints= new Maintenance();
    this.flats= [];
    this.expens= [];
    this.maintRepo=[];
    this.error = false;
    this.maintsTenure=[];
    if (typeof this.year === 'undefined' || this.year === null) {
      this.error = true;
      this.errorMessage = "Please select the year"
    }
    if (typeof this.month === 'undefined' || this.month === null) {
      this.error = true;
      this.errorMessage = "Please select the month"
    }
    
    this.maints = await this.maintenanceService.getByMonth(this.year, this.month)
    this.expens = await this.expenceService.getByMonth(this.year, this.month)
    this.monthlySummary.expenditure_Month=this.expens.reduce((sum, item) => sum + item.amount, 0);
    this.monthlySummary.maintenanceCollection_Month = this.maints.details
                .filter(maint=>maint.status==='PAID')
                .reduce((sum, item) => sum + item.amount, 0)
    this.monthlySummary.pending=this.maints.details
                .filter(maint=>maint.status==='PENDING')
                .reduce((sum, item) => sum + item.amount, 0)
    this.monthlySummary.availableBalance_Month=this.monthlySummary.maintenanceCollection_Month-this.monthlySummary.expenditure_Month;
  }

  async getByTenure():Promise<void>{

    var maintsTenure=await this.maintenanceService.getAsyncByTenure(this.tenure);
    var expenseTenure=await this.expenceService.getAsyncByTenure(this.tenure);
    console.log(maintsTenure);
    for(var i=0;i<maintsTenure.length;i++){
      maintsTenure[i].details.forEach(det=>{
        this.maintsTenure.push(det);
      })
    }
    console.log(this.maintsTenure);
    this.monthlySummary.maintenanceCollection_Year = this.maintsTenure
                .filter(maint=>maint.status==='PAID')
                .reduce((sum, item) => sum + item.amount, 0)
    this.monthlySummary.expenditure_Year=expenseTenure.reduce((sum, item) => sum + item.amount, 0);      
    this.monthlySummary.pending_year=this.maintsTenure
                .filter(maint=>maint.status==='PENDING')
                .reduce((sum, item) => sum + item.amount, 0)
    this.monthlySummary.availableBalance_Year=this.monthlySummary.maintenanceCollection_Year-this.monthlySummary.expenditure_Year;
    this.maintenanceDetail=this.maintsTenure.filter(maint=>maint.status==='PENDING');
  }

  handleError(err:any):void{
    this.error=true;
    this.errorMessage = "Error calling the service";
  }
}
