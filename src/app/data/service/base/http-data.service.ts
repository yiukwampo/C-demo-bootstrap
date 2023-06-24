import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {
  private _viseApiHost = environment.viseApiHost;
  private _viseApiPort = environment.viseApiPort;
  get viseApiHost(): string {
    // return this._viseApiHost;
    var protocal = window.location.protocol;
    var hostname = window.location.hostname;
    if (this._viseApiPort !== "") {
      return protocal + "//" + hostname + ":" + this._viseApiPort;
    }
    return protocal + "//" + hostname;
  }

  constructor(private httpClient: HttpClient) { }

  static setJsonContentType(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  static setWwwFormContentType(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  }

  static setAuthorization(token: string): HttpHeaders {
    return new HttpHeaders({ 'Authorization': token });
  }

  static setAuthorizationJsonContentType(token: string): HttpHeaders {
    return new HttpHeaders({ 'Authorization': token, 'Content-Type': 'application/json; charset=utf-8' });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occured:", error.error.message);
    } else {
      if (error && error != undefined) {
        if (error.status != undefined) {
          console.error(
            `Backend returned code:[ ${error.status} ], ` +
            `message:[ ${error.message} ]`
          );
        }
      }
    }
    return throwError(() => error);
  }

  getViaOutside(url: string, option?: any): Observable<any> {
    return this.httpClient
      .get<any>(url, option)
      .pipe(catchError(this.handleError));
  }
  postViaOutside(url: string, body:any, option?: any): Observable<any> {
    return this.httpClient
      .post<any>(url, body, option)
      .pipe(catchError(this.handleError));
  }

  get(url: string, option?: any): Observable<any> {
    return this.httpClient
      .get<any>(this.viseApiHost + url, option)
      .pipe(catchError(this.handleError));
  }

  post(url: string, body: any, option?: any): Observable<any> {
    return this.httpClient
      .post<any>(this.viseApiHost + url, body, option)
      .pipe(catchError(this.handleError));
  }

  delete(url: string, option?: any): Observable<any> {
    return this.httpClient
      .delete<any>(this.viseApiHost + url, option)
      .pipe(catchError(this.handleError));
  }

  put(url: string, body: any, option?: any): Observable<any> {
    return this.httpClient
      .put<any>(this.viseApiHost + url, body, option)
      .pipe(catchError(this.handleError));
  }

  obj2HttpParams(obj?: any): HttpParams {
    let params: HttpParams = new HttpParams();

    for (const [key, val] of Object.entries(obj)) {
      if (val) {
        let paramVal = typeof val === 'string' ? val : "";
        params = params.append(key, paramVal);
      }
    }

    return params;
  }

}
