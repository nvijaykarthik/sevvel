import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as _ from 'underscore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Flats } from './flats.domains';
import { Urls, APIURLS } from '../app.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FlatsService {
  constructor(private http: HttpClient) {
  }

  getAllFlats(): Observable<Flats[]> {
    var url = Urls.getDomain().concat(APIURLS.flats);
    return this.http.get<Flats[]>(url);
  }

  saveFlat(flat:Flats):Observable<Flats>{
    var url=Urls.getDomain().concat(APIURLS.flats);
    return this.http.post<Flats>(url,flat,{headers:httpOptions.headers});
  }
  delete(flatno:string):Observable<any>{
    var url=Urls.getDomain().concat(APIURLS.flats).concat("/").concat(flatno);
    return this.http.delete<any>(url,{headers:httpOptions.headers});
  }

  async getAllFlatsAsync(): Promise<Flats[]> {
    var url = Urls.getDomain().concat(APIURLS.flats);
    const response = await this.http.get<Flats[]>(url).toPromise();
    
    return response;
  }

   getTotalCash(): Observable<any> {
    var url = Urls.getDomain().concat(APIURLS.totalCash);
    const response = this.http.get<any>(url);
    return response;
  }
}
