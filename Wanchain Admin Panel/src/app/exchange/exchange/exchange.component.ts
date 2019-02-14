import { Component, OnInit } from '@angular/core';
import { AminService } from 'src/app/service/amin.service';
import{Constants} from 'src/app/model/constant'
import { NgxSpinnerService } from 'ngx-spinner';
import { NavigationService } from 'src/app/service/navigation.service';
declare let require:any;
var wanUtil = require('wanchain-util')
var Tx = wanUtil.wanchainTx;
var Buffer = require('buffer/').Buffer 
@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
web3:any
public datastore1:any
public orderbook:any
public trade1:any;
public trans1:any;
public fees=0
public calcfees=0
public owner:any;
public active:any
public locked:any
public validate1:boolean=false;
public validate2:boolean=false;
  constructor(private admin:AminService,private spinner: NgxSpinnerService,private navig:NavigationService) 
  { 
    this.web3=this.admin.getWeb3()
    this.datastore1 =new this.web3.eth.Contract(Constants.datastore,Constants.datastoreAddressWAN,{
      gaslimit:3000000,
      })  
    this.orderbook =new this.web3.eth.Contract(Constants.OrderbookContractAbiWAN,Constants.OrderBookContractAddressWAN,{
      gaslimit:3000000,
      }) 
  }

  trade(option)
  {
    let instance=this;
    instance.orderbook.methods.exFees(option).call().then(function(res,err){
      console.log(res);
     instance.fees=res;
    })
  }
  calctrade(value,add)
  {
    console.log(value,add);
    let instance=this;
    // instance.tradefee.methods.calcTradeFee(1,1).call().then(function(res,err){
    //   console.log(res);
    //  instance.calcfees=res;
    // }) 
    instance.orderbook.methods.calcTradeFee(value,add).call().then(function(res,err){    //100000000000000,1
      console.log(res)
      instance.calcfees=res;
      })
  }
  ownership(ownadd)
  {
    let instance=this;
    instance.datastore1.methods.ownership(ownadd).call().then(function(res,err){
      console.log(res);
     instance.owner=res;
    })
  }
  tradeactive()
  {
    let instance=this;
    instance.orderbook.methods.isTradingActive().call().then(function(res,err){
      console.log(res);
     instance.active=res;
    })
    instance.orderbook.methods.isLocked().call().then(function(res,err){
      console.log(res);
     instance.locked=res;
    })
  }
  // tradelocked()
  // {
  //   let instance=this;
  //   instance.orderbook.methods.isLocked().call().then(function(res,err){
  //     console.log(res);
  //    instance.locked=res;
  //   })
  // }
  changefees(baseadd,etheradd,base,ether,normal)
{
  let instance=this;
  instance.validate1=false;
  instance.validate2=false;

  instance.spinner.show();
  var add= this.web3.eth.accounts.privateKeyToAccount('0X'+localStorage.getItem("LoggedInUser"));
  var address=add['address'];
      console.log(address);
           const privateKey = Buffer.from(localStorage.getItem("LoggedInUser"),'hex');
           const contractFunction = instance.orderbook.methods.updateFeeCalcConfig(baseadd,etheradd,base,ether,normal);
           const functionAbi = contractFunction.encodeABI();
           let estimatedGas;
           let nonce;
           console.log("Getting gas estimate");
           contractFunction.estimateGas({from:address}).then((gasAmount) => {
             estimatedGas = gasAmount.toString(16);
           
             console.log("Estimated gas: " + estimatedGas);
           
             instance.web3.eth.getTransactionCount(address).then(_nonce => {
             nonce = _nonce.toString(16);
         
             console.log("Nonce: " + nonce);
             
             const txParams = {
               gasPrice: '0x09184e72a00',
               gasLimit: 4000000,
               to:Constants.OrderBookContractAddressWAN,
               data: functionAbi,
               from: address,
               chainId: 3,
               Txtype: 0x01,
               nonce: '0x' + nonce
             };
         
         
             const tx = new Tx(txParams);
             tx.sign(privateKey);
         console.log(tx)
             const serializedTx = tx.serialize();
             this.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt => {
              //instance.spinner.hide();
               console.log(receipt);
               if(receipt['status'])
               {
                instance.spinner.hide();
                instance.validate2=true;
               }
               else
               {
                instance.spinner.hide();
               }
             
          }).catch(err=> instance.complete())
      })
         });
}

addown(addd)
{
  let instance=this;
  instance.validate1=false;
  instance.validate2=false;
  instance.spinner.show();
  var add= this.web3.eth.accounts.privateKeyToAccount('0X'+localStorage.getItem("LoggedInUser"));
  var address=add['address'];
      console.log(address);
           const privateKey = Buffer.from(localStorage.getItem("LoggedInUser"),'hex');
           const contractFunction = instance.datastore1.methods.addOwnership(addd);
           const functionAbi = contractFunction.encodeABI();
           let estimatedGas;
           let nonce;
           console.log("Getting gas estimate");
           contractFunction.estimateGas({from:address}).then((gasAmount) => {
             estimatedGas = gasAmount.toString(16);
           
             console.log("Estimated gas: " + estimatedGas);
           
             instance.web3.eth.getTransactionCount(address).then(_nonce => {
             nonce = _nonce.toString(16);
         
             console.log("Nonce: " + nonce);
             
             const txParams = {
               gasPrice: '0x09184e72a00',
               gasLimit: 4000000,
               to:Constants.datastoreAddressWAN,
               data: functionAbi,
               from: address,
               chainId: 3,
               Txtype: 0x01,
               nonce: '0x' + nonce
             };
         
         
             const tx = new Tx(txParams);
             tx.sign(privateKey);
         console.log(tx)
             const serializedTx = tx.serialize();
             this.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt => {
              //instance.spinner.hide();
               console.log(receipt);
               if(receipt['status'])
               {
                instance.spinner.hide();
                instance.validate2=true;
               }
               else
               {
                instance.spinner.hide();
               }
             
          }).catch(err=> instance.complete())
      })
         });
}
remown(addd)
{
  let instance=this;
  instance.validate1=false;
  instance.validate2=false;
  instance.spinner.show();
  var add= this.web3.eth.accounts.privateKeyToAccount('0X'+localStorage.getItem("LoggedInUser"));
  var address=add['address'];
      console.log(address);
           const privateKey = Buffer.from(localStorage.getItem("LoggedInUser"),'hex');
           const contractFunction = instance.datastore1.methods.removeOwnership(addd);
           const functionAbi = contractFunction.encodeABI();
           let estimatedGas;
           let nonce;
           console.log("Getting gas estimate");
           contractFunction.estimateGas({from:address}).then((gasAmount) => {
             estimatedGas = gasAmount.toString(16);
           
             console.log("Estimated gas: " + estimatedGas);
           
             instance.web3.eth.getTransactionCount(address).then(_nonce => {
             nonce = _nonce.toString(16);
         
             console.log("Nonce: " + nonce);
             
             const txParams = {
               gasPrice: '0x09184e72a00',
               gasLimit: 4000000,
               to:Constants.datastoreAddressWAN,
               data: functionAbi,
               from: address,
               chainId: 3,
               Txtype: 0x01,
               nonce: '0x' + nonce
             };
         
         
             const tx = new Tx(txParams);
             tx.sign(privateKey);
         console.log(tx)
             const serializedTx = tx.serialize();
             this.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt => {
              //instance.spinner.hide();
               console.log(receipt);
               if(receipt['status'])
               {
                instance.spinner.hide();
                instance.validate2=true;
               }
               else
               {
                instance.spinner.hide();
               }
             
          }).catch(err=> instance.complete())
      })
         });
}

changeTraderConfig(trade,dataadd,trans)
{
  console.log(trade,dataadd,trans);
  let instance=this;
  if(trade=='true')
  {
    instance.trade1=trade;
  }
  else{
    instance.trade1='';
  }
  if(trans =='true')
  {
    instance.trans1=trans;
  }
  else{
    instance.trans1='';
  }
  console.log(instance.trade1,instance.trans1);
  instance.validate1=false;
  instance.validate2=false;
  instance.spinner.show();
  var add= this.web3.eth.accounts.privateKeyToAccount('0X'+localStorage.getItem("LoggedInUser"));
  var address=add['address'];
      console.log(address);
           const privateKey = Buffer.from(localStorage.getItem("LoggedInUser"),'hex');
           const contractFunction = instance.orderbook.methods.changeTraderConfig(instance.trade1,dataadd,instance.trans1);
           const functionAbi = contractFunction.encodeABI();
           let estimatedGas;
           let nonce;
           console.log("Getting gas estimate");
           contractFunction.estimateGas({from:address}).then((gasAmount) => {
             estimatedGas = gasAmount.toString(16);
           
             console.log("Estimated gas: " + estimatedGas);
           
             instance.web3.eth.getTransactionCount(address).then(_nonce => {
             nonce = _nonce.toString(16);
         
             console.log("Nonce: " + nonce);
             
             const txParams = {
               gasPrice: '0x09184e72a00',
               gasLimit: 4000000,
               to:Constants.OrderBookContractAddressWAN,
               data: functionAbi,
               from: address,
               chainId: 3,
               Txtype: 0x01,
               nonce: '0x' + nonce
             };
         
         
             const tx = new Tx(txParams);
             tx.sign(privateKey);
         console.log(tx)
             const serializedTx = tx.serialize();
             this.web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt => {
              //instance.spinner.hide();
               console.log(receipt);
               if(receipt['status'])
               {
                instance.spinner.hide();
                instance.validate2=true;
               }
               else
               {
                instance.spinner.hide();
               }
             
          }).catch(err=> instance.complete())
      })
         });
}
complete()
{
  let instance=this;
  instance.spinner.hide()
  instance.validate1=true;
}
  ngOnInit() {
  }

}
