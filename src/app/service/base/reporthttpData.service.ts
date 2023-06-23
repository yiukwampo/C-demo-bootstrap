import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ReportHttpDataService {
  get reportApiHost(): string {
    return this._reportApiHost;
  }
  private _reportApiHost = 'v1'

  constructor(private http: HttpClient) {
  }

  static setJsonContentType(): HttpHeaders {
    return new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  }

  get(url: string, body?: any): Observable<any> {
    return this.http
      .get<any>(this._reportApiHost + url, body)
      .pipe(catchError(this.handleError));
  }

  post(url: string, body: any, options?: any): Observable<any> {
    return this.http
      .post<any>(this._reportApiHost + url, body, options)
      .pipe(catchError(this.handleError));
  }

  delete(url: string, options?: any): Observable<any> {
    return this.http
      .delete<any>(this._reportApiHost + url, options)
      .pipe(catchError(this.handleError));
  }

  put(url: string, body: any, options: any): Observable<any> {
    return this.http
      .put<any>(this._reportApiHost + url, body, options)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError(error);
  }

  obj2HttpParams(obj?: any): HttpParams{

    let params: HttpParams = new HttpParams();

    for(const[key, val] of Object.entries(obj)){
      if(val) params = params.append(key, val.toString());
    }

    return params;
  }

}
