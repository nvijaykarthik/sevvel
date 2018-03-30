import { Component, OnInit } from '@angular/core';
import { Maintenance, Tenure } from './maintenance.domains';
import { MaintenanceService } from './maintenance.service';
import { FlatsService } from '../flats/flats.service';
import { Flats } from '../flats/flats.domains';
import { DatePipe } from '@angular/common';
import { PagerService } from '../app.pager.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  public maint:Maintenance;
  public maints:any[];
  public flats:Flats[];
  public error:boolean=false;
  public errorMessage:String="";
  public total:number;
  public tenure:Tenure;
  public selTenure:number=0;
  public tenures:number[]=[];
  public months:number[]=[];
  public years:number[]=[];
  public tenureRecords:any[];
  public selTenureId:string="";
  public selmaintDetail:any={};
  public maintId:string;


  // pager object
  pager: any = {};
 
  // paged items
  pagedItems: any[];

  constructor(private maintenanceService:MaintenanceService,private flatsService:FlatsService,private pagerService: PagerService) { }
  

  ngOnInit() {
    this.error=false;
    this.maint= new Maintenance();
    this.tenure= new Tenure();   
    for (let index = 1; index <= 20; index++) {
      this.tenures.push(index);
    }
    for (let index = 1; index <= 12; index++) {
      this.months.push(index);
    }
    for (let index = 2015; index <= 2025; index++) {
      this.years.push(index);
    }
  }

  clear():void{
    this.maint= new Maintenance();
  }

  getFlats():void{
    this.error=false;
    this.flatsService.getAllFlats()
    .subscribe(
      flats=>{
        this.flats=flats;
        this.setPage(1);
      },
      err=>{
        this.handleError(err);
      }
    )
  }

  loadDates():void{
    this.maintenanceService.getByTenure(this.selTenure)
    .subscribe(
      tenureRecords=>{
        tenureRecords.sort((a,b)=>a.month-b.month);
        this.tenureRecords=tenureRecords;
      },
      err=>{
        this.handleError(err);
      }
    )
  }

  getMaint():void{
    console.log(this.selTenureId);
    this.maints=this.tenureRecords.filter(rec=>rec._id===this.selTenureId)[0];
    console.log(this.maints);
  }
  save():void{
    this.error=false;
    if(this.tenure.tenure<0 && this.tenure.tenure>20){
      this.error=true;
      this.errorMessage = "Invalid tenure";
      return 
    }
    if(this.tenure.amount<0){
      this.error=true;
      this.errorMessage = "Invalid Amount";
      return 
    }
    if(this.tenure.year<2015 && this.tenure.year>2025){
      this.error=true;
      this.errorMessage = "Invalid Year";
      return 
    }
    if(this.tenure.month<0 && this.tenure.month>12){
      this.error=true;
      this.errorMessage = "Invalid Month";
      return 
    }
    this.maintenanceService.create(this.tenure)
    .subscribe(
      maint=>{
        console.log("Saved successfully");
        alert("Tenure Created");
      },
      err=>{
        this.handleError(err);
      }
      
    )
}

update(maintId:string, maint:any):void{
  this.selmaintDetail=maint;
  this.maintId=maintId;
}

approve(maintId:string,detailId:string):void{
  console.log(this.selmaintDetail);
  this.maintenanceService.approve(maintId,detailId,this.selmaintDetail)
  .subscribe(
      updatedRec=>{
        alert("Updated successfully");
         console.log(this.selmaintDetail);
      },
      err=>{
        this.handleError(err);
      }
    )

}
get():void{
  this.error=false;
  this.maintenanceService.getAll()
  .subscribe(
    maints=>{
      this.maints=maints;
      this.total = this.maints.reduce((sum, item) => sum + item.amount, 0);
    },
    err=>{
      this.handleError(err);
    }
  )
}

delete(_id:string):void{
  this.error=false;
  console.log("Deleting "+_id);
  this.maintenanceService.delete(_id)
  .subscribe(
    flat=>{
      console.log("Deleted successfully");
      this.get();
    },
    err=>{
      this.handleError(err);
    }
    
  )
}
  handleError(err:any):void{
    this.error=true;
    this.errorMessage = "Error calling the service";
    console.log(err.error.errorMessage.errmsg);
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
