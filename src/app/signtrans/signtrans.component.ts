import { Component, OnInit } from '@angular/core';
import { SignService } from '../sign.service';

@Component({
  selector: 'app-signtrans',
  templateUrl: './signtrans.component.html',
  styleUrls: ['./signtrans.component.css']
})
export class SigntransComponent implements OnInit {
public key:String
  constructor(private ws:SignService) { }
  privatekey(a)
  {
   this.key=a;
   console.log(this.key);
   
  }
  signtransaction(b)
  {
    alert(this.key);
    var priv=this.key;
    this.ws.transaction(b,priv).then(res=>{
    (document.getElementById('c')as HTMLInputElement).value=res;
 alert(res)     
        });
  }
  ngOnInit() {

  }

}