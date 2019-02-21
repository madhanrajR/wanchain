var http = require("http");
var express = require('express')
var app= express();
var fs = require("fs");
var data = fs.readFileSync('../output.txt')
var mongo = require('mongodb');
var MongoClient=require('mongodb').MongoClient
let address=require('./address.model')
// http.createServer(function (request, response) {
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//    response.end(data.toString());
// }).listen(8081);

var url = "mongodb+srv://test:test@cluster0-h7tsx.mongodb.net/admin";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });
// MongoClient.connect(url, function(err, db) {
//    if (err) throw err;
//    var dbo = db.db("mydb");
//    dbo.createCollection("testing", function(err, res) {
//      if (err) throw err;
//      console.log("Collection created!");
//      db.close();
//    });
//  });

MongoClient.connect(url,function(err,db){
   if(err) throw error;
   var dbo=db.db('mydb');
   var myobj={name:"kannan",address:"bangalore"}
   dbo.collection("testing").insertOne(myobj,function(err,res){
      if (err) throw error;
      console.log('data inserted');
      db.close();    
   })
   dbo.collection("testing").findOne({},function(err,res){
      if (err) throw error;
      console.log(res.name);
      db.close();
      
   })
})
var server = app.listen(8081,function()
{
   var add = server.address();
   var host=server.address().address;
   var port=server.address().port;
   console.log(add,host,port)
})
console.log('Server running at http://127.0.0.1:8081/');
//console.log(data.toString());
console.log("Program ended");
