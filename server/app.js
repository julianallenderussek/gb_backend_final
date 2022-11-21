const express=require('express');
const bodyParser=require('body-parser');
require("dotenv").config(); 

const port=3000;
const app=express();
  
const MONGO_URI = process.env.MONGO_URI

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended: true}));
 
// Parses the text as json
app.use(bodyParser.json());
 
app.get("/", (req, res) => {
    return res.status(200).json({message: "this works "})
})

app.listen(port, function() {
    console.log("Serrver is listening at port:" + port);
});
 
