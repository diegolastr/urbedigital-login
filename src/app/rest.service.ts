import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
export interface User 
{
  user: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class RestService {
  tokenKey = 'Authorization';

  constructor(private http: HttpClient) { }
  login( json: User): Observable<any> {
     return this.http.post<any>("https://api.urbe.edu/v1/login/web/init",
     json, { 'headers': new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' });
  }

  saveToken(token: string) {
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.setItem(this.tokenKey, token);
  }

}
