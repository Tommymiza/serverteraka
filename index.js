const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2")
require("dotenv").config()

const app = express();
const db = mysql.createConnection(process.env.DATABASE_URL)
app.use(cors());
app.use(express());
app.use(bodyParser.json({ extended: true }));

app.get("/test", (req, res)=>{
    res.send("Test")
})

app.listen(process.env.PORT, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Listen on port", process.env.PORT)
    }
})
