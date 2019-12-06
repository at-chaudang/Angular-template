import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const DOMAIN_API = environment.api;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  local = environment.api;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    })
  }

  constructor(private http: HttpClient) { }

  get(endpoint: string[], params?: object): Observable<any> {
    const url = this.convertUrl(endpoint, params);
    return this.http.get(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  post(endpoint: string[], body: any): Observable<any> {
    const url = this.convertUrl(endpoint);
    return this.http.post(url, body, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  put(endpoint: string[], body: any): Observable<any> {
    const url = this.convertUrl(endpoint);
    return this.http.put(url, body, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  delete(endpoint: string[]): Observable<any> {
    const url = this.convertUrl(endpoint);
    return this.http.delete(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  convertUrl(endpoint: string[], params?: object): string {
    // return an url as 'http://locahost:3000/api/authenticate'.
    return `${DOMAIN_API}/${endpoint.join('/')}`;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
