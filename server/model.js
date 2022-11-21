const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  amounte: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    required: true,
  },
  gasUser: {
    type: Number,
    required: false,
  },
  receiptHash: {
    type: Number,
    required: false,
  }
});

const AddressSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  }
});

const User = mongoose.model("Transaction", TransactionSchema);
const Address = mongoose.model("Address", AddressSchema);

module.exports = { User, Address };