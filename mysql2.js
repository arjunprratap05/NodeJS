var mysql = require('mysql');
var con = mysql.createConnection({
    host : "localhost",
    user :"root",
    password : "niitpatna",
    database : "mydb"
   // insecureAuth : true
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    var sql = "Create table customers(name Varchar(255), address Varchar(255))";
    con.query(sql, function(err,result) {
        if(err) throw err;
        console.log("Table Created");
    });
});