import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
//import {environment} from "../../../environments/environment";

@Injectable()
export class HttpDataService {
  get spmApiHost(): string {
    return this._spmApiHost;
  }
  private _spmApiHost = 'v1'

  constructor(private http: HttpClient) {
  }

  static setJsonContentType(): HttpHeaders {
    return new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  }

  static setHeader(): HttpHeaders {
    return new HttpHeaders({'Access-Control-Allow-Origin':'*'});
  }

  get(url: string, body?: any): Observable<any> {
    return this.http
      .get<any>(this._spmApiHost + url, body)
      .pipe(catchError(this.handleError));
  }

  post(url: string, body: any, options?: any): Observable<any> {
    return this.http
      .post<any>(this._spmApiHost + url, body, options)
      .pipe(catchError(this.handleError));
  }

  postOrg(url: string, body: any, options?: any): Observable<any> {
    return this.http
      .post<any>(url, body, options)
      .pipe(catchError(this.handleError));
  }

  delete(url: string, options?: any): Observable<any> {
    return this.http
      .delete<any>(this._spmApiHost + url, options)
      .pipe(catchError(this.handleError));
  }

  deleteOrg(url: string, options?: any): Observable<any> {
    return this.http
      .delete<any>(url, options)
      .pipe(catchError(this.handleError));
  }

  put(url: string, body: any, options: any): Observable<any> {
    return this.http
      .put<any>(this._spmApiHost + url, body, options)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error.message}`
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
