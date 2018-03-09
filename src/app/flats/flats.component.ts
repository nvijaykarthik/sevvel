import { Component, OnInit } from '@angular/core';
import {Flats} from './flats.domains';
import {FlatsService} from './flats.service';

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

  constructor(private flatsService:FlatsService) { }

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
        flats.forEach(f=>{
          if(f.createdDate){
            var dt=new Date(f.createdDate);
            f.dateStr=dt.toDateString();
          }
        })
        this.flats=flats;

      },
      err=>{
        this.handleError(err);
      }
    )
  }

  handleError(err:any):void{
    this.error=true;
    this.errorMessage=err;
  }

}
