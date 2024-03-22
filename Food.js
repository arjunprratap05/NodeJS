const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const mysql = require('mysql');

const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "niitpatna",
    insecureAuth : true,
    //database : "FOODORDER"
});

con.connect(function (err) {
    if(err) throw err;
    console.log("Database Connected!");
});

app.get("/",(req,res)=> {
    res.sendFile(__dirname + "/OrderFoodOnline.html");
});

app.post("/",(req,res) => {
    const name = req.body.username;
    const date = req.body.date;
    const email = req.body.usrmail;
    const number = req.body.usrtel;
    const food = req.body.food;
    const sel1 = req.body.sel1;
    const sel2 = req.body.sel2;
    const sel3 = req.body.sel3;
    const sel4 = req.body.sel4;
    const Pickup = req.body.pickup;
    
    con.query("CREATE DATABASE IF NOT EXISTS FOODORDER",function(err,result){
        if(err) throw err;
        console.log("Database Created OR Already Exists");
    });

    con.query("USE FOODORDER",function(err,result){
        if(err) throw err;
        console.log("Using FOODORDER database");
    });

    const createTableQuery = "Create Table IF Not Exists FoodorderDetails (" +
        "name VARCHAR(255), " +
        "date DATETIME, " +
        "email VARCHAR(255), " +
        "number VARCHAR(20), " +
        "food VARCHAR(50), " +
        "Restraunt NVARCHAR(60), " +
        "Drinks NVARCHAR(30), " +
        "Soups NVARCHAR(50), " +
        "Dishes NVARCHAR(50), " +
        "OrderType VARCHAR(20))";   

        con.query(createTableQuery,function(err,result){
            if(err) throw err;
            console.log("Table Created OR Already Exists")
        });

        const insertTableQuery = "Insert into FoodorderDetails (name,date,email,number,food,Restraunt,Drinks,Soups,Dishes,OrderType) " +
        "Values (?,?,?,?,?,?,?,?,?,?)";

        con.query(insertTableQuery,[name,date,email,number,food,sel1,sel2,sel3,sel4,Pickup],function(err,result){
            if(err) throw err;
            console.log("Data Inserted Successfully");
            res.send("Thank You for Placing Your Ordering");
        });
    
    // console.log("Name :" + name);
    // console.log("Date :" + date);
    // console.log("Email :" + email);
    // console.log("Number :" + number);
    // console.log("Select Food :" + food);
    // console.log("Select Restraunt: " + sel1);
    // console.log("Select Your Drinks :" + sel2);
    // console.log("Select Your Soups :" + sel3);
    // console.log("Select Your Dishes :" + sel4);
    // console.log("Order For :" + Pickup);
    // res.send("Thank You for Ordering");
    });
app.listen(5000,() =>{
    console.log('Server is running on port 5000');
});