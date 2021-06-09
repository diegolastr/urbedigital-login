import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

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
  urlLogin = environment.apiLogin;  


  constructor(private http: HttpClient) { }
  login( json: User): Observable<any> {
     return this.http.post<any>(`${this.urlLogin}`,
     json, { 'headers': new HttpHeaders({ 'Content-Type': 'application/json' }),
      observe: 'response' });
  }

  saveToken(token: string) {
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.setItem(this.tokenKey, token);
  }

}
