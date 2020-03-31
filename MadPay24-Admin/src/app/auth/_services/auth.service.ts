import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseurl = 'http://localhost:9788/site/admin/auth/';
JwtHelper = new JwtHelperService();
decodedToken: any;
constructor(private http: HttpClient ) { }

login(model: any) {
  return this.http.post(this.baseurl + 'login', model ).pipe(
    map((resp: any) => {
      const user = resp;
      if (user) {
        localStorage.setItem('token', user.token);
        // this.decodedToken = this.JwtHelper.decodeToken(user.token);
      }
    })
  );
 }

 register(model: any) {
  return this.http.post(`${this.baseurl}register`, model );
 }

 logged() {
   const token = localStorage.getItem('token');
   return !this.JwtHelper.isTokenExpired(token);
 }

}
