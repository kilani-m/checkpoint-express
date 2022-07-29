var express = require("express");
var app = express();

var path = __dirname + '/views/';




app.use(function (req, res, next) {
  
  const date = new Date();
const day = date.getDay()
const hour =date.getHours()
if ((day==0||day==6)||(hour<9||hour>15)){
return  res.send( " we are closed"  );
}
  next();
});

app.get("/",function(req,res){
  res.sendFile(path + "home.html");
});

app.get("/service",function(req,res){
  res.sendFile(path + "service.html");
});

app.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});




app.listen(3000,function(){
  console.log("Live at Port 3000");
});