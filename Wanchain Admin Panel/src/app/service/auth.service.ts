import { Injectable } from '@angular/core';
import{ Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public sign:boolean;
  constructor(private myRoute:Router) {}
  sendToken(token: string) {
 //   console.log(token);
    
    localStorage.setItem("LoggedInUser", token)
  }
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }
  isLoggednIn() {
   // console.log(this.getToken()!==null);
    
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("LoggedInUser");
    localStorage.setItem("home", 'true')
    localStorage.setItem("basket", 'false')
    localStorage.setItem("exchange", 'false')
    this.myRoute.navigate(["login"]);
  }
  home()
  {
this.sign=true;
  }
  register1()
  {
    this.sign=false;
  }
}
