import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import Web3 = require('web3')
import Web3 from 'web3';
//import * as Tx from 'wanchain-util';
import wanUtil from 'wanchain-util';
// var wanUtil = require('wanchain-util')
var Tx = wanUtil.wanchainTx;
import { NgxSpinnerService } from 'ngx-spinner';
import * as ex from 'ethereumjs-tx';
import { Buffer } from "buffer";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public usd:any;
public lastupdate:any;
public market:any;
public data:any;
public usd1:any;
public lastupdate1:any;
public market1:any;
public data1:any;
public show=false;
public show1=false;
public address:any;
public address1:any;
public ethvalue:any;
public wanvalue:any;
private name='madhan';
web3: any;
_web3:any;
uri = 'http://localhost:3000';
  constructor(private http:HttpClient,private spinner: NgxSpinnerService) 
  { 
    console.log('home')
     this.web3 = new Web3(new Web3.providers.HttpProvider('http://18.216.117.215:8545'));
     this._web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/ed9c627571c540d39a95770ce85f7534'));
     console.log(this.web3.version)
    console.log(this.web3.eth.accounts._provider);
    console.log(this._web3.eth.accounts._provider);
    //new this.web3(new this.web3.providers.HttpProvider("http://18.216.117.215:8545"));
    setInterval(() => {
      this.http.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD').subscribe(data1 => {
        this.data=data1;
        this.usd=this.data.RAW.ETH.USD.PRICE;
        this.lastupdate=this.data.RAW.ETH.USD.LASTUPDATE;
        this.market=this.data.RAW.ETH.USD.MKTCAP;
        //console.log(data1)
        // console.log(data1['data'].quotes.USD.price);
        // console.log(data1['data'].last_updated)
        // console.log(data1['data'].quotes.USD.market_cap);
      })

      this.http.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=WAN&tsyms=USD').subscribe(data2 => {
        this.data=data2;
        this.usd1=this.data.RAW.WAN.USD.PRICE;
        this.lastupdate1=this.data.RAW.WAN.USD.LASTUPDATE;
        this.market1=this.data.RAW.WAN.USD.MKTCAP;
       // console.log(data2)
        // console.log(data1['data'].quotes.USD.price);
        // console.log(data1['data'].last_updated)
        // console.log(data1['data'].quotes.USD.market_cap);
      })

      this.http.get('https://min-api.cryptocompare.com/data/price?fsym=WAN&tsyms=ETH,USD,EUR').subscribe(data1 => {
//console.log(data1['ETH'])
this.ethvalue=data1['ETH']/100;
//console.log(this.ethvalue)
    })

    this.http.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=WAN,USD,EUR').subscribe(data1 => {
     // console.log(data1['WAN'])
      this.wanvalue=data1['WAN']/100;
     // console.log(this.wanvalue)
          })

          // this.http.get('https://api.blockcypher.com/v1/btc/test3/addrs').subscribe(data1 => {console.log(data1)});
        }, 1000);
  }

  ngOnInit() {
  }
wan()
{
  this.show=true;
  this.show1=false;
}
eth()
{
  this.show1=true;
  this.show=false;
}
cancel()
{
  this.show=false;
}
cancel1()
{
  this.show1=false;
}

length(a)
{
 // console.log('a')
this.address=a;
console.log(a)
  if(a.length>1 && a.length==64)
  {
    var add1;
    add1= this.web3.eth.accounts.privateKeyToAccount('0x'+this.address);
    console.log(add1['address'])
console.log(a.length);
this.account(add1['address']);
  }

}

public res:any;
account(add)
 {
   var self=this;
   console.log(add)
  this.web3.eth.getBalance(add,function(err,result){
    // console.log(err)
    // console.log(result)
    self.res=result/1000000000000000000;
    (document.getElementById('puk')as HTMLInputElement).value=self.res.toFixed(4);
  });
 }

 length1(a)
{
 // console.log('a')
this.address1=a;
console.log(a)
  if(a.length>1 && a.length==64)
  {
    var add1;
    add1= this._web3.eth.accounts.privateKeyToAccount('0x'+this.address1);
    console.log(add1['address'])
console.log(a.length);
this.account1(add1['address']);
  }

}

public res1:any;
account1(add)
 {
   var self=this;
   console.log(add)
  this._web3.eth.getBalance(add,function(err,result){
     console.log(err)
     console.log(result)
    self.res1=result/1000000000000000000;
    (document.getElementById('puk1')as HTMLInputElement).value=self.res1.toFixed(4);
  });
 }
public wan1:any;
 length2(a)
 {
  // console.log('a')
 this.wan1=a;
 console.log(a)
   if(a.length>0)
   {
     var add1;
     add1=this.wan1*100
     var add2;
     add2=add1*this.ethvalue;
 console.log(a.length);
 console.log(add1);
 console.log(add2);
 this.account2(add2);
   }
 
 }
account2(add2)
{
  (document.getElementById('puk2')as HTMLInputElement).value=add2;
}

public eth1:any;
length3(a)
 {
  // console.log('a')
 this.eth1=a;
 console.log(a)
   if(a.length>0)
   {
     var add1;
     add1=this.eth1*100
     var add2;
     add2=add1*this.wanvalue;
 console.log(a.length);
 console.log(add1);
 console.log(add2);
 this.account3(add2);
   }
 
 }
account3(add2)
{
  (document.getElementById('puk5')as HTMLInputElement).value=add2;
}







exchange(wan,eth)
{
  const obj={
    wan:wan,
    eth:eth,
    address:this.address,
    address1:this.address1
  }
  this.spinner.show();
  return this.http.post(this.uri+'/exchange',obj).subscribe(res=>{
    console.log(res)
    var address;
    var add;
add= this.web3.eth.accounts.privateKeyToAccount('0X'+this.address);
address=add['address'];
    this.web3.eth.getBalance(address,function(err,result){
                this.res=result/1000000000000000000;
                (document.getElementById('puk')as HTMLInputElement).value=this.res.toFixed(4);
                 });
                 var address1;
                 var add1;
                  add1= this._web3.eth.accounts.privateKeyToAccount('0X'+this.address1);
                  address1=add1['address'];

                 this._web3.eth.getBalance(address1,function(err,result){
                            this.res1=result/1000000000000000000;
                            (document.getElementById('puk1')as HTMLInputElement).value=this.res1.toFixed(4);
                 });
                 this.spinner.hide();
  },
  err=>
  {
    this.spinner.hide();
console.log(err)
  }
  )
//   var self=this;
//   var add;
// var address;
// add= this.web3.eth.accounts.privateKeyToAccount('0X'+this.address);
// address=add['address'];
// console.log(address);

//     const privateKey = Buffer.from(this.address,'hex');
//     let estimatedGas;
//     let nonce;
//     self.web3.eth.getTransactionCount(address).then(_nonce => {
//       nonce = (_nonce).toString(16);
  
//       console.log("Nonce: " + nonce);
      
//       const txParams = {
//         gasPrice:'0x09184e72a00',
//         gasLimit: 4000000,
//         to:'0xCf04f32C7e42F7F8531d27bf9448d0a957a66972',
//         //data: functionAbi,
//         from: address,
//         chainId: 3,
//         Txtype: 0x01,
//         nonce: '0x' + nonce,
//         value: wan*1000000000000000000
//       };
  
  
//       const tx = new Tx(txParams);
//       tx.sign(privateKey);
//   console.log(tx)
//       const serializedTx = tx.serialize();
  
//       this.web3.eth.getBalance(address,function(err,result){
//         console.log(result);
//       })
//   console.log(serializedTx)
//      self.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt => {
//         console.log(receipt);
//         this.web3.eth.getBalance(address,function(err,result){
//           console.log("Value after increment: " + result) 
//            });
//        if(receipt['status'])
//       {
//         this.web3.eth.getBalance(address,function(err,result){
//           this.res=result/1000000000000000000;
//           (document.getElementById('puk')as HTMLInputElement).value=this.res.toFixed(4);
//           self.exchange1(eth);
//            });
         
//       }
        
//       })
     
 
//     })
}

// private exchange1(eth)
// {
//   console.log(eth)
//   var self=this;
//   var add;
//   var add1;
// var address;
// var address1;
//  add= this._web3.eth.accounts.privateKeyToAccount('0X'+this.address1);
//  address1=add['address'];;
// add1=this._web3.eth.accounts.privateKeyToAccount('0X'+'c36a97a92b0dfc6d25cb101b584d368e426f7f331026b0709c313443397f7a06');
// address=add1['address'];
// console.log(address);

//     const privateKey = Buffer.from('c36a97a92b0dfc6d25cb101b584d368e426f7f331026b0709c313443397f7a06','hex');
//     let estimatedGas;
//     let nonce;
//     self._web3.eth.getTransactionCount(address).then(_nonce => {
//       nonce = (_nonce).toString(16);
  
//       console.log("Nonce: " + nonce);
      
//       const txParams = {
//         gasPrice:'0x09184e72a00',
//         gasLimit: 4000000,
//         to:address1,
//         //data: functionAbi,
//         from:address,
//         chainId: 4,
//         Txtype: 0x01,
//         nonce: '0x' + nonce,
//         value: eth*1000000000000000000
//       };
  
  
//       const tx = new ex(txParams);
//       tx.sign(privateKey);
//   console.log(tx)
//       const serializedTx = tx.serialize();
  
//       this._web3.eth.getBalance(address1,function(err,result){
//         console.log(result);
//       })
//   console.log(serializedTx)
//      self._web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt => {
//         console.log(receipt);
//         this._web3.eth.getBalance(address1,function(err,result){
//           console.log("Value after increment: " + result) 
//            });
//        if(receipt['status'])
//       {
//         this._web3.eth.getBalance(address1,function(err,result){
//           self.res1=result/1000000000000000000;
//           (document.getElementById('puk1')as HTMLInputElement).value=self.res1.toFixed(4);
//            });
//       }
        
//       })
     
 
//     })
// }

exchange2(eth,wan)
{

  const obj={
    wan:wan,
    eth:eth,
    address:this.address,
    address1:this.address1
  }
  this.spinner.show();
  return this.http.post(this.uri+'/exchange1',obj).subscribe(res=>{
    console.log(res)
    var address;
    var add;
add= this.web3.eth.accounts.privateKeyToAccount('0X'+this.address);
address=add['address'];
    this.web3.eth.getBalance(address,function(err,result){
                this.res=result/1000000000000000000;
                (document.getElementById('puk')as HTMLInputElement).value=this.res.toFixed(4);
                 });
                 var address1;
                 var add1;
                  add1= this._web3.eth.accounts.privateKeyToAccount('0X'+this.address1);
                  address1=add1['address'];

                 this._web3.eth.getBalance(address1,function(err,result){
                            this.res1=result/1000000000000000000;
                            (document.getElementById('puk1')as HTMLInputElement).value=this.res1.toFixed(4);
                 });
                 this.spinner.hide();
  },
  err=>
  {
    this.spinner.hide();
console.log(err)
  }
  )
//   var self=this;
//   var add;
// var address;
// add= this._web3.eth.accounts.privateKeyToAccount('0X'+this.address1);
// address=add['address'];
// console.log(address);

//     const privateKey = Buffer.from(this.address1,'hex');
//     let estimatedGas;
//     let nonce;
//     self._web3.eth.getTransactionCount(address).then(_nonce => {
//       nonce = (_nonce).toString(16);
  
//       console.log("Nonce: " + nonce);
      
//       const txParams = {
//         gasPrice:'0x09184e72a00',
//         gasLimit: 4000000,
//         to:'0xCb5a2170113081c32C643662ED23618CC696A3C5',
//         //data: functionAbi,
//         from:address,
//         chainId: 4,
//         Txtype: 0x01,
//         nonce: '0x' + nonce,
//         value: eth*1000000000000000000
//       };
  
  
//       const tx = new ex(txParams);
//       tx.sign(privateKey);
//   console.log(tx)
//       const serializedTx = tx.serialize();
  
//       this._web3.eth.getBalance(address,function(err,result){
//         console.log(result);
//       })
//   console.log(serializedTx)
//      self._web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt => {
//         console.log(receipt);
//         this._web3.eth.getBalance(address,function(err,result){
//           console.log("Value after increment: " + result) 
//            });
//        if(receipt['status'])
//       {
//         this._web3.eth.getBalance(address,function(err,result){
//           self.res1=result/1000000000000000000;
//           (document.getElementById('puk1')as HTMLInputElement).value=self.res1.toFixed(4);
//           self.exchange3(wan);
//            });
//       }
        
//       })
     
 
//     })
}

// exchange3(wan)
// {
//   console.log(wan)
//   var self=this;
//   var add;
//   var add1;
// var address;
// var address1;
//  add= this.web3.eth.accounts.privateKeyToAccount('0X'+this.address);
//  address1=add['address'];;
// add1=this.web3.eth.accounts.privateKeyToAccount('0X'+'b85f7d62eea257d021f4d7e67da59b5a43d710ceab74dbfd0dee5b8121403d11');
// address=add1['address'];
// console.log(address);

//     const privateKey = Buffer.from('b85f7d62eea257d021f4d7e67da59b5a43d710ceab74dbfd0dee5b8121403d11','hex');
//     let estimatedGas;
//     let nonce;
//     self.web3.eth.getTransactionCount(address).then(_nonce => {
//       nonce = (_nonce).toString(16);
  
//       console.log("Nonce: " + nonce);
      
//       const txParams = {
//         gasPrice:'0x09184e72a00',
//         gasLimit: 4000000,
//         to:address1,
//         //data: functionAbi,
//         from: address,
//         chainId: 3,
//         Txtype: 0x01,
//         nonce: '0x' + nonce,
//         value: wan*1000000000000000000
//       };
  
  
//       const tx = new Tx(txParams);
//       tx.sign(privateKey);
//   console.log(tx)
//       const serializedTx = tx.serialize();
  
//       this.web3.eth.getBalance(address1,function(err,result){
//         console.log(result);
//       })
//   console.log(serializedTx)
//      self.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt => {
//         console.log(receipt);
//         this.web3.eth.getBalance(address1,function(err,result){
//           console.log("Value after increment: " + result) 
//            });
//        if(receipt['status'])
//       {
//         this.web3.eth.getBalance(address1,function(err,result){
//           self.res=result/1000000000000000000;
//           (document.getElementById('puk')as HTMLInputElement).value=self.res.toFixed(4);
//            });
//       }
        
//       })
     
 
//     })
// }
}
