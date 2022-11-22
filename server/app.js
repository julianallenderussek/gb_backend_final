const express=require('express');
const bodyParser=require('body-parser');
const cors = require("cors")
require("dotenv").config(); 
const db = require("./database")
const { getTransactionHistory, createTransaction } = require("./controllers/transactions")
const { getAddresses, getBalance, createAddress } = require("./controllers/addresses")
const port=4000;
const app=express();

db.connectDB();

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
    origin: "*",
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))
// Parses the text as json
app.use(bodyParser.json());
 
// Accounts
app.get("/account/addresses", getAddresses)
app.get("/account/balance/:address", getBalance)
app.post("/accounts", createAddress)

// Transactions
app.get("/transaction/history", getTransactionHistory)
app.post("/transactions", createTransaction)

app.listen(port, function() {
    console.log("Server is listening at port: " + port);
});
 
