import { Component, OnInit } from '@angular/core';
//import {FsService} from 'ngx-fs';
import { WalletService } from '../wallet.service';
import {keythereum} from 'keythereum'
import Web3 from 'web3';
//const fs = this._fsService.fs as any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ws:WalletService) {}
  register_bank(a)
  {
    // alert(a);
    // (document.getElementById('b')as HTMLInputElement).value=a;

   this.ws.getAccount(a).then(res=>{
     (document.getElementById('b')as HTMLInputElement).value=res;
alert(res)     
       });
 }
 

fileChange(event,password) {
  alert(password)
  var reader = new FileReader();
  var content;
  var password;
  reader.readAsText(event.target.files[0]);
  var me = this;
  reader.onload = function () {
    console.log(reader.result);
    let keystore = JSON.parse(reader.result);
    console.log(keystore)
    //keythereum.recover(password,keystore, function (privateKey) {
      // var string = new TextDecoder("utf-8").decode(privateKey);
 
    // console.log(new TextDecoder("utf-8").decode(privateKey));
    //console.log(privateKey);
    //console.log(privateKey.toString('hex')); 

  }
}
  


  ngOnInit() {
  }

}
