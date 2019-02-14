import { Component, OnInit } from '@angular/core';
import { AminService } from 'src/app/service/amin.service';
import{Constants} from 'src/app/model/constant'
import { NgxSpinnerService } from 'ngx-spinner';
import { NavigationService } from 'src/app/service/navigation.service';
declare let require:any;
var wanUtil = require('wanchain-util')
var Tx = wanUtil.wanchainTx;
var Buffer = require('buffer/').Buffer 
//var Buffer=new Buffer;
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
public tradefee:any
public protostore:any
public transproxy:any
public createorder:any
public allowance:any
public fees:any
public calcfees:number
public validate:boolean=false;
public validate1:boolean=false;
public validate2:boolean=false;
public val:any
web3:any
  constructor(private admin:AminService,private spinner: NgxSpinnerService,private navig:NavigationService) 
  { 
this.web3=this.admin.getWeb3()
    this.tradefee =new this.web3.eth.Contract(Constants.Tradefeeabi,Constants.TradefeeAddress,{
      gaslimit:3000000,
      })  
    this.protostore =new this.web3.eth.Contract(Constants.ProtoStorage,Constants.protoStorageAddress,{
      gaslimit:3000000,
      }) 
    this.transproxy =new this.web3.eth.Contract(Constants.Transfersproxy,Constants.TrasfersProxyAddress,{
      gaslimit:3000000,
      })    
    this.createorder =new this.web3.eth.Contract(Constants.createPortfolioWAN,Constants.CretaeContractAddress,{
      gaslimit:3000000,
      })          

        
  }
trade(option)
{
  let instance=this;
  instance.tradefee.methods.exFees(option).call().then(function(res,err){
    console.log(res);
   instance.fees=res;
  })
}
calctrade(value,option)
{
  console.log(value,option);
  let instance=this;
  var val;
  instance.validate=false;
  instance.tradefee.methods.exFees(option).call().then(function(res,err){
    val=(1000000000000000000/res)
  if(value >= (1000000000000000000/res))
  {
  instance.tradefee.methods.calcTradeFee(value,option).call().then(function(res,err){ 
    console.log(res)
    instance.calcfees=res;
    })
  }
  else
  {
    instance.val=val;
    //alert("please enter the value greater than"+  val)
    instance.validate=true;
   
  }
  })
}

regpublisher(publisher)
{
  let instance=this;
  instance.validate1=false;
  instance.validate2=false;
  instance.spinner.show();
  var add= this.web3.eth.accounts.privateKeyToAccount('0X'+localStorage.getItem("LoggedInUser"));
  var address=add['address'];
      console.log(address);
           const privateKey = Buffer.from(localStorage.getItem("LoggedInUser"),'hex');
           const contractFunction = instance.protostore.methods.registerPublisher(publisher);
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
               to:Constants.protoStorageAddress,
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

rempublisher(publisher)
{
  let instance=this;
  instance.validate1=false;
  instance.validate2=false;
  instance.spinner.show();
  var add= this.web3.eth.accounts.privateKeyToAccount('0X'+localStorage.getItem("LoggedInUser"));
  var address=add['address'];
      console.log(address);
           const privateKey = Buffer.from(localStorage.getItem("LoggedInUser"),'hex');
           const contractFunction = instance.protostore.methods.removePublisher(publisher);
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
               to:Constants.protoStorageAddress,
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
           //   instance.spinner.hide();
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
regconfig(dataadd,safeadd)
{
  let instance=this;
  instance.validate1=false;
  instance.validate2=false;
  instance.spinner.show();
  var add= this.web3.eth.accounts.privateKeyToAccount('0X'+localStorage.getItem("LoggedInUser"));
  var address=add['address'];
      console.log(address);
           const privateKey = Buffer.from(localStorage.getItem("LoggedInUser"),'hex');
           const contractFunction = instance.transproxy.methods.registerConfig(dataadd,safeadd);
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
               to:Constants.TrasfersProxyAddress,
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
            //  instance.spinner.hide();
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

updateExchange(data,fee,trans,ether)
{
  let instance=this;
  instance.validate1=false;
  instance.validate2=false;
  instance.spinner.show();
  var add= this.web3.eth.accounts.privateKeyToAccount('0X'+localStorage.getItem("LoggedInUser"));
  var address=add['address'];
      console.log(address);
           const privateKey = Buffer.from(localStorage.getItem("LoggedInUser"),'hex');
           const contractFunction = instance.createorder.methods.updateExchange(data,fee,trans,ether);
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
               to:Constants.CretaeContractAddress,
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
exgpublisher(publisher)
{
  let instance=this;
  instance.protostore.methods.IsExchangeAllowed(publisher).call().then(function(res,err){ 
    console.log(res)
    instance.allowance=res;
    })
}
changefees(base,ether,normal)
{
  let instance=this;
  instance.validate1=false;
  instance.validate2=false;
  instance.spinner.show();
  var add= this.web3.eth.accounts.privateKeyToAccount('0X'+localStorage.getItem("LoggedInUser"));
  var address=add['address'];
      console.log(address);
           const privateKey = Buffer.from(localStorage.getItem("LoggedInUser"),'hex');
           const contractFunction = instance.tradefee.methods.updateFeeSchedule(base,ether,normal);
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
               to:Constants.TradefeeAddress,
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
             // instance.spinner.hide();
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
         })
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
