import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'https://cryptic-refuge-47557.herokuapp.com/';

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string){
    return this.http
    .post<any>(`${this.url}/authenticate`, { username, password })
    .pipe(
      map(userData => {
        sessionStorage.setItem("username", username);
        let tokenStr = "Bearer " + userData.token;
        sessionStorage.setItem("token", tokenStr);
        return userData;
      })
    );
  }

  isLogged(){
    return !!sessionStorage.getItem("username");
  }

  logout(){
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("token");
  }
  
}
