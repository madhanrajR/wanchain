import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private myRoute:Router) { }
  login(a)
  {
    console.log(a)
    if(a.length>1 && a.length==64)
    {
      console.log(a)
     this.auth.sendToken(a)
       this.myRoute.navigate(["home"]);
   }
  }
  ngOnInit() {
  }

}
