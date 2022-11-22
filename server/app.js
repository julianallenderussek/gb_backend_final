const express=require('express');
const bodyParser=require('body-parser');
require("dotenv").config(); 
const db = require("./database") 
const { Transaction, Address } = require("./model")

const port=4000;
const app=express();

db.connectDB();

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));
 
// Parses the text as json
app.use(bodyParser.json());
 
app.get("/", async (req, res) => {
    const address = await Address.find();
    return res.status(200).json({data: address})
})

app.listen(port, function() {
    console.log("Server is listening at port: " + port);
});
 
