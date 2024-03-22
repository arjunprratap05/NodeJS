var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password :"niitpatna",
    insecureAuth : true
});

con.connect(function(err) {
 if(err) throw err;
    con.query("Create Database mydb2",function(err,result){
        if(err) throw err;
         console.log("Database Created");
     });
 });