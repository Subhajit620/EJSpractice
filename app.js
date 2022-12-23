const express=require("express");

const server=express();
server.use(express.urlencoded({extended:true}));
server.set("view engine","ejs");
const array=[];
server.get("/",(req,res)=>{
res.render("index",{fruit:array});

});
server.post("/",(req,res)=>{
    const pLanguage=req.body.languagename;
    array.push(pLanguage);
res.redirect("/");

})

server.listen(3600,()=>{
console.log("this server is running on port number 3000");
})