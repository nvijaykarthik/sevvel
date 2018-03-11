import { Component, OnInit } from '@angular/core';
import { Maintenance } from './maintenance.domains';
import { MaintenanceService } from './maintenance.service';
import { FlatsService } from '../flats/flats.service';
import { Flats } from '../flats/flats.domains';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  public maint:Maintenance;
  public maints:Maintenance[];
  public flats:Flats[];
  public error:boolean=false;
  public errorMessage:String="";
  public total:number;
  constructor(private maintenanceService:MaintenanceService,private flatsService:FlatsService) { }
  

  ngOnInit() {
    this.error=false;
    this.maint= new Maintenance();
    this.get();
    this.getFlats();
   
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
        
      },
      err=>{
        this.handleError(err);
      }
    )
  }
  save():void{
    this.error=false;
    this.maintenanceService.save(this.maint)
    .subscribe(
      maint=>{
        console.log("Saved successfully");
        this.get();
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
    this.errorMessage=JSON.stringify(err);
  }
}
