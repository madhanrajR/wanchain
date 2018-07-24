import { Injectable } from '@angular/core';
import Web3 from 'web3';
import wanUtil from 'wanchain-util';
var Tx = wanUtil.wanchainTx;
declare let require: any;
declare let window: any;
let tokenAbi = require('../app/signtrans/abi.json');
@Injectable({
  providedIn: 'root'
})
export class SignService {
  public web3: any;
  public account:any;
  public _contract: any;
  public conAddress: string ="0x488edd9381c0dd40d17cd58477a34cb012a5a5a7";
  constructor() 
  {
    this.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545/"));
    console.log(this.web3)
    console.log(this.web3.eth.accounts._provider);
    this.web3.eth.getAccounts((err,res)=>{console.log(res[0]);
    })
    this.account = '0x06a17b89da93c8fc3f0da6e4535997be1abea9b1';
    this._contract = new this.web3.eth.Contract(tokenAbi,this.conAddress, {
      from: this.account,
      gasLimit: 3000000,
    })
   }
   public async transaction(b,priv): Promise<string> 
   {
     console.log(priv)
      console.log(b);
      console.log(this.account)
      var add;
      var address;
     add= this.web3.eth.accounts.privateKeyToAccount('0X'+priv);
address=add['address'];
     console.log(address);
     
     let meta=this;
         return new Promise((resolve, reject) => {
          const privateKey = Buffer.from(priv,'hex');
          const contractFunction = this._contract.methods.set(b);
          const functionAbi = contractFunction.encodeABI();
          let estimatedGas;
          let nonce;
          console.log("Getting gas estimate");
          contractFunction.estimateGas({from:address}).then((gasAmount) => {
            estimatedGas = gasAmount.toString(16);
          
            console.log("Estimated gas: " + estimatedGas);
          
          this.web3.eth.getTransactionCount(address).then(_nonce => {
            nonce = _nonce.toString(16);
        
            console.log("Nonce: " + nonce);
            
            const txParams = {
              gasPrice: '0x09184e72a00',
              gasLimit: 4000000,
              to: this.conAddress,
              data: functionAbi,
              from: address,
              chainId: 3,
              Txtype: 0x01,
              nonce: '0x' + nonce
            };
        
        
            const tx = new Tx(txParams);
            tx.sign(privateKey);
        
            const serializedTx = tx.serialize();
        
           this._contract.methods.get().call().then(v => console.log("Value before increment: " + v));
        
           this. web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt => {
              console.log(receipt);
               this._contract.methods.get().call().then(function (result) {
              console.log(result)
              resolve(result);
            });
            })
           
          }); 
        });
         })as Promise<string>;
       }
   
}
