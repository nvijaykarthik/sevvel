import { Component, OnInit } from '@angular/core';
import { ExpenceService } from './expence.service';
import { Expence } from './expence.domains';

@Component({
  selector: 'app-expence',
  templateUrl: './expence.component.html',
  styleUrls: ['./expence.component.css']
})
export class ExpenceComponent implements OnInit {

  public expen: Expence;
  public expens: Expence[];
  public total:number;
  public error: boolean = false;
  public errorMessage: String = "";

  constructor(private expenceService: ExpenceService) { }

  ngOnInit() {
    this.error = false;
    this.expen = new Expence();
    this.get();
  }

  clear():void{
    this.expen = new Expence();
  }
  save(): void {
    this.error = false;
    this.expenceService.save(this.expen)
      .subscribe(
        flat => {
          console.log("Saved successfully");
          this.get();
        },
        err => {
          this.handleError(err);
        }

      )
  }
  get(): void {
    this.error = false;
    this.expenceService.getAll()
      .subscribe(
        expens => {
          this.expens = expens;
          this.total = this.expens.reduce((sum, item) => sum + item.amount, 0);
        },
        err => {
          this.handleError(err);
        }
      )
  }

  delete(_id: string): void {
    this.error = false;
    console.log("Deleting " + _id);
    this.expenceService.delete(_id)
      .subscribe(
        flat => {
          console.log("Deleted successfully");
          this.get();
        },
        err => {
          this.handleError(err);
        }

      )
  }
  handleError(err: any): void {
    this.error = true;
    this.errorMessage = err;
  }
}
