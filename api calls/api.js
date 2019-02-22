var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app= express();
var cors=require ("cors")
var Web3=require('web3')
var wanUtil=require('wanchain-util')
var Tx = wanUtil.wanchainTx;
const EthereumTx = require('ethereumjs-tx')
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
var web3 = new Web3(new Web3.providers.HttpProvider('http://18.216.117.215:8545'));
     var _web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/ed9c627571c540d39a95770ce85f7534'));
app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({
    extended:false
}));


app.get('/',(req,res)=>{
    res.send("hello world");
})

app.post('/exchange',(req,res)=>{
var eth=req.body.eth;
var wan=req.body.wan;
var address1=cryptr.decrypt(req.body.address);
console.log(req.body.address);

console.log(address1)
  var add;
var address;
add= web3.eth.accounts.privateKeyToAccount('0X'+address1);
address=add['address'];
console.log(address);

    const privateKey = Buffer.from(address1,'hex');
    let estimatedGas;
    let nonce;
   web3.eth.getTransactionCount(address).then(_nonce => {
      nonce = (_nonce).toString(16);
  
      console.log("Nonce: " + nonce);
      
      const txParams = {
        gasPrice:'0x09184e72a00',
        gasLimit: 4000000,
        to:'0xCf04f32C7e42F7F8531d27bf9448d0a957a66972',
        //data: functionAbi,
        from: address,
        chainId: 3,
        Txtype: 0x01,
        nonce: '0x' + nonce,
        value: wan*1000000000000000000
      };
  
  
      const tx = new Tx(txParams);
      tx.sign(privateKey);
  console.log(tx)
      const serializedTx = tx.serialize();
  
    web3.eth.getBalance(address,function(err,result){
        console.log(result);
      })
  console.log(serializedTx)
     web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt => {
        console.log(receipt);
      //  web3.eth.getBalance(address,function(err,result){
      //     console.log("Value after increment: " + result) 
      //      });
       if(receipt['status'])
      {
        console.log('status2');
       var address1=cryptr.decrypt(req.body.address1);
        var add;
        var add1;
      var address;
      var address2;
       add= _web3.eth.accounts.privateKeyToAccount('0X'+address1);
       address2=add['address'];
       console.log(address2); 
      add1=_web3.eth.accounts.privateKeyToAccount('0X'+'acf44d03da8467e785f7c862423c565dca2be9f9942eb50b776effc0c8472c5e');
      address=add1['address'];
      console.log(address);
      
          const privateKey = Buffer.from('acf44d03da8467e785f7c862423c565dca2be9f9942eb50b776effc0c8472c5e','hex');
          let estimatedGas;
          let nonce;
         _web3.eth.getTransactionCount(address).then(_nonce => {
            nonce = (_nonce).toString(16);
        
            console.log("Nonce: " + nonce);
            
            const txParams = {
              gasPrice:'0x09184e72a00',
              gasLimit: 4000000,
              to:address2,
              //data: functionAbi,
              from:address,
              chainId: 3,
              Txtype: 0x01,
              nonce: '0x' + nonce,
              value: eth*1000000000000000000
            };
        
        
            const tx = new EthereumTx(txParams)
            tx.sign(privateKey);
        console.log(tx)
            const serializedTx = tx.serialize();
        
           _web3.eth.getBalance(address2,function(err,result){
              console.log(result);
            })
        console.log(serializedTx)
           _web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt => {
              console.log(receipt);
             _web3.eth.getBalance(address2,function(err,result){
                console.log("Value after increment: " + result) 
                 });
             if(receipt['status'])
            {
             res.send(true)
            }
              
            })
           
       
          })
         
      }
        
      })
     
 
    })

})


app.post('/exchange1',(req,res)=>{
  var eth=req.body.eth;
var wan=req.body.wan;
var wanaddress=cryptr.decrypt(req.body.address);
  var ethaddress=cryptr.decrypt(req.body.address1);
  var add;
  var address;
  add= _web3.eth.accounts.privateKeyToAccount('0X'+ethaddress);
  address=add['address'];
  console.log(address);
  
      const privateKey = Buffer.from(ethaddress,'hex');
      let estimatedGas;
      let nonce;
     _web3.eth.getTransactionCount(address).then(_nonce => {
        nonce = (_nonce).toString(16);
    
        console.log("Nonce: " + nonce);
        
        const txParams = {
          gasPrice:'0x09184e72a00',
          gasLimit: 4000000,
          to:'0xbe443e281A2d02FC76c7702C6143Be660aA094B1',
          //data: functionAbi,
          from:address,
          chainId: 3,
          Txtype: 0x01,
          nonce: '0x' + nonce,
          value: eth*1000000000000000000
        };
    
    
        const tx = new EthereumTx(txParams)
        tx.sign(privateKey);
    console.log(tx)
        const serializedTx = tx.serialize();
    
        _web3.eth.getBalance(address,function(err,result){
          console.log(result);
        })
    console.log(serializedTx)
       _web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt => {
          console.log(receipt);
          add= _web3.eth.accounts.privateKeyToAccount('0X'+ethaddress);
       var addr=add['address'];
         _web3.eth.getBalance(addr,function(err,result){
            console.log("Value after increment: " + result) 
             });
         if(receipt['status'])
        {
          var add;
            var add1;
          var address;
          var address1;
           add= web3.eth.accounts.privateKeyToAccount('0X'+wanaddress);
           address1=add['address'];;
          add1=web3.eth.accounts.privateKeyToAccount('0X'+'b85f7d62eea257d021f4d7e67da59b5a43d710ceab74dbfd0dee5b8121403d11');
          address=add1['address'];
          console.log(address);
          
              const privateKey = Buffer.from('b85f7d62eea257d021f4d7e67da59b5a43d710ceab74dbfd0dee5b8121403d11','hex');
              let estimatedGas;
              let nonce;
             web3.eth.getTransactionCount(address).then(_nonce => {
                nonce = (_nonce).toString(16);
            
                console.log("Nonce: " + nonce);
                
                const txParams = {
                  gasPrice:'0x09184e72a00',
                  gasLimit: 4000000,
                  to:address1,
                  //data: functionAbi,
                  from: address,
                  chainId: 3,
                  Txtype: 0x01,
                  nonce: '0x' + nonce,
                  value: wan*1000000000000000000
                };
            
            
                const tx = new Tx(txParams);
                tx.sign(privateKey);
            console.log(tx)
                const serializedTx = tx.serialize();
            
                web3.eth.getBalance(address1,function(err,result){
                  console.log(result);
                })
            console.log(serializedTx)
               web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', receipt => {
                  console.log(receipt);
                 web3.eth.getBalance(address1,function(err,result){
                    console.log("Value after increment: " + result) 
                     });
                 if(receipt['status'])
                {
                 res.send(true);
                }
                  
                })
               
           
              })
        }
          
        })
       
   
      })

})



app.listen(3000,()=>{
  console.log("connected");
  
})