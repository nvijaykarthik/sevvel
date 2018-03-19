import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Maintenance, Tenure } from './Maintenance.domains';
import { Urls, APIURLS } from '../app.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MaintenanceService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Maintenance[]> {
    var url = Urls.getDomain().concat(APIURLS.maintenance);
    return this.http.get<Maintenance[]>(url);
  }

  create(tenure:Tenure):Observable<any>{
    var url=Urls.getDomain().concat(APIURLS.maintenance)
    .concat("/")
    .concat(tenure.year.toString())
    .concat("/")
    .concat(tenure.month.toString())
    .concat("/")
    .concat(tenure.tenure.toString())
    .concat("/")
    .concat(tenure.amount.toString());
    return this.http.put<any>(url,{headers:httpOptions.headers});
  }
  delete(_id:string):Observable<any>{
    var url=Urls.getDomain().concat(APIURLS.maintenance).concat("/").concat(_id);
    return this.http.delete<any>(url,{headers:httpOptions.headers});
  }

  getByFlatno(flatNo:string): Observable<Maintenance[]> {
    var url = Urls.getDomain().concat(APIURLS.maintenance).concat("/").concat(flatNo);
    return this.http.get<Maintenance[]>(url);
  }

  async getByMonth(year:number,month:number):Promise<Maintenance[]>{
    var url=Urls.getDomain().concat(APIURLS.maintenance)
    .concat("/").concat(year.toString())
    .concat("/").concat(month.toString());
    const response= await this.http.get<Maintenance[]>(url).toPromise();
    return response;
  }
}
