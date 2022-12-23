const fs = require('fs')
const http=require('http')
var url=require("url")

let server=http.createServer(function(req,res){
   var path=url.parse(req.url).pathname
   if(req.url=="/")
   {
         
   }
   
   
   












res.end()
})
server.listen(8081)