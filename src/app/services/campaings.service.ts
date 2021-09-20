import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { retry, catchError } from 'rxjs/operators';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class CampaignsService {

  private url = `${environment.apiURL}`;
  private body: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor( private http: HttpClient, private errorService: ErrorService ) { }

  getCampaigns() {
    return this.http.get<any>( `${this.url}/campaigns`)
      .pipe(
        retry( 1 ),
        catchError( this.errorService.handleError ),
      );
  }

  getCampaignsGroups() {
    return this.http.get<any>( `${this.url}/campaign-groups/?id=1`)
      .pipe(
        retry( 1 ),
        catchError( this.errorService.handleError ),
      );
  }

}