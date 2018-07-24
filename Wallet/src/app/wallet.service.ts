import { Injectable } from '@angular/core';
import Web3 from 'web3';
//import {FsService} from 'ngx-fs';
import wanUtil from 'wanchain-util';
//import fs from 'fs';
const wanUtil = require('wanchain-util');
//const fs = require('fs');
//const path = require('path');
declare let require: any;
declare let window: any;
@Injectable({
  providedIn: 'root'
})
export class WalletService {
  public web3: any;
  public account:any;
  public _contract: any;
  constructor() 
  { 
   
    this.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545/"));
    console.log(this.web3)
    console.log(this.web3.eth.accounts._provider);
    this.web3.eth.getAccounts((err,res)=>{console.log(res[0]);
     //let keystoreStr = fs.readFileSync("../Wanchain/testnet/keystore/UTC--2018-07-20T06-41-25.282370600Z--9E4af56a0aB71C9a8D7b0AcDE2a8E53503C026cd","utf8");
//console.log(keystoreStr);

    });
  }

  public async getAccount(a): Promise<string> 
{
  let meta=this;
      return new Promise((resolve, reject) => {
      
        this.web3.eth.personal.newAccount(a,function (error,result) {
          if(error){    
            reject(error); 
          } 
          resolve(result);
        });
      })as Promise<string>;
    }

}
