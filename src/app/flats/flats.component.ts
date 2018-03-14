import { Component, OnInit } from '@angular/core';
import {Flats} from './flats.domains';
import {FlatsService} from './flats.service';
import { DatePipe } from '@angular/common';
import { PagerService } from '../app.pager.service';

@Component({
  selector: 'app-flats',
  templateUrl: './flats.component.html',
  styleUrls: ['./flats.component.css']
})
export class FlatsComponent implements OnInit {

  public flat:Flats;
  public flats:Flats[];
  public error:boolean=false;
  public errorMessage:String="";

   // pager object
   pager: any = {};
 
   // paged items
   pagedItems: any[];

  constructor(private flatsService:FlatsService,private pagerService: PagerService) { }

  ngOnInit() {
    this.error=false;
    this.flat= new Flats();
    this.getFlats();
  }
  clear():void{
    this.flat= new Flats();
  }
  saveFlat():void{
      this.error=false;
      console.log("Saving flat"+this.flat);
      this.flatsService.saveFlat(this.flat)
      .subscribe(
        flat=>{
          console.log("Flat saved successfully");
          this.getFlats();
        },
        err=>{
          this.handleError(err);
        }
        
      )
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

  delete(flatno:string):void{
    this.error=false;
    console.log("Deleting  flat"+flatno);
    this.flatsService.delete(flatno)
    .subscribe(
      flat=>{
        console.log("Flat Deleted successfully");
        this.getFlats();
      },
      err=>{
        this.handleError(err);
      }
      
    )
}

  handleError(err:any):void{
    this.error=true;
    this.errorMessage = "Error calling the service";
    console.log(err);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.flats.length, page);

    // get current page of items
    this.pagedItems = this.flats.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
