import { Injectable } from '@angular/core';
import { DeclareVarStmt } from '@angular/compiler';
//import * as Web3 from 'web3';
declare let Web3:any;
@Injectable({
  providedIn: 'root'
})
export class AminService {
  web3:any
  constructor() 
  {
    this.web3 = new Web3(new Web3.providers.HttpProvider("http://18.216.117.215:8545"));
   }

   getWeb3() {
    return this.web3;
  }
}
