import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Expence } from './expence.domains';
import { Urls, APIURLS } from '../app.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ExpenceService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Expence[]> {
    var url = Urls.getDomain().concat(APIURLS.expence);
    return this.http.get<Expence[]>(url);
  }

  save(maint:Expence):Observable<Expence>{
    var url=Urls.getDomain().concat(APIURLS.expence);
    return this.http.post<Expence>(url,maint,{headers:httpOptions.headers});
  }
  delete(_id:string):Observable<any>{
    var url=Urls.getDomain().concat(APIURLS.expence).concat("/").concat(_id);
    return this.http.delete<any>(url,{headers:httpOptions.headers});
  }

  async getByMonth(year:number,month:number):Promise<Expence[]>{
    var url=Urls.getDomain().concat(APIURLS.expence)
    .concat("/").concat(year.toString())
    .concat("/").concat(month.toString());
    return this.http.get<Expence[]>(url).toPromise();
  }
}
