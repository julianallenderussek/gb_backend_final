const mongoose = require("mongoose");

const db = mongoose.connect(
  `mongodb+srv://julianallende:Arussek1@cluster0.tkju1.mongodb.net`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "gb_backend"
  }
).then(() => {
  console.log("Database connected");
}).catch((err) => { 
  console.log(err);
})

module.export = db;
