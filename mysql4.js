var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user : "root",
    password : "niitpatna",
    database : "mydb"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
var name = 'sonu';
var adr = 'Arrah';
var sql = 'Insert into customers (name,address) values (? , ?)';
con.query(sql,[name,adr], function(err,result) {
    if(err) throw err;
    console.log("Successfully Inserted");
    
    });
});
