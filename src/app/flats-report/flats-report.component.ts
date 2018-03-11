import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from '../maintenance/maintenance.service';
import { FlatsService } from '../flats/flats.service';
import { Maintenance } from '../maintenance/maintenance.domains';
import { Flats } from '../flats/flats.domains';
import { PagerService } from '../app.pager.service';

@Component({
  selector: 'app-flats-report',
  templateUrl: './flats-report.component.html',
  styleUrls: ['./flats-report.component.css']
})
export class FlatsReportComponent implements OnInit {

  public maints:Maintenance[];
  public flats:Flats[];
  public error: boolean = false;
  public errorMessage: String = "";
  public flatNumber:string="";
  public total:number;
   // pager object
   pager: any = {};
 
   // paged items
   pagedItems: any[];

  constructor(private maintenanceService:MaintenanceService,private flatsService:FlatsService,private pagerService: PagerService) { }

  ngOnInit() {
   this.getFlats();
  }
  getFlats():void{
    this.error=false;
    this.flatsService.getAllFlats()
    .subscribe(
      flats=>{
        this.flats=flats;
      },
      err=>{
        this.handleError(err);
      }
    )
  }

  getMaint():void{
    console.log(this.flatNumber);
    this.maintenanceService.getByFlatno(this.flatNumber)
    .subscribe(
      maints=>{
        this.maints=maints;
        this.total = this.maints.reduce((sum, item) => sum + item.amount, 0);
        this.maints.sort(function(a:Maintenance,b:Maintenance){
          return (+b.date) - (+a.date);
        })
        this.setPage(1);
      },
      err=>{
        this.handleError(err);
      }
    )
  }
  handleError(err:any):void{
    this.error=true;
    this.errorMessage=JSON.stringify(err);
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.maints.length, page);

    // get current page of items
    this.pagedItems = this.maints.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
