var http = require("http");
var mysql = require('mysql');
const express = require('express');
const app = express();
var con = mysql.createConnection({
    hoat : "localhost",
    user : "root",
    password : "niitpatna",
    database :"mydb",
    insecureAuth : true
})
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/query.html");
});

app.post("/",(req,res) => {
    const rollno  = req.body.rollno;
    console.log("Rollno :" +rollno);

    con.connect(function(err) {
        if(err) throw err;
    
    var sql = 'Select * From student where rollno = ?';
    con.query(sql,[rollno],function(err,result) {
        console.log(result);
        res.send(result);
    }); 
    });
}).listen(8085);