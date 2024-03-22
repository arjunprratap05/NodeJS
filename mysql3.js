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
    var sql = "Insert into customers(name,address) Values ('company INC','Highway 37')";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("1 record inserted");
    });
});