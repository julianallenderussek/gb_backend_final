const express=require('express');
const bodyParser=require('body-parser');
require("dotenv").config(); 
const { Transaction, Address } = require("./model")
const { db } = require("./database")

const port=4000;
const app=express();
  
// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));
 
// Parses the text as json
app.use(bodyParser.json());
 
app.get("/", async (req, res) => {
    const addresses = await Address.find({})
    return res.status(200).json({data: addresses})
})

app.listen(port, function() {
    console.log("Serrver is listening at port:" + port);
});
 
