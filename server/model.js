const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  source: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    required: true,
  },
  gasUsed: {
    type: Number,
    required: false,
  },
  receiptHash: {
    type: String,
    required: false,
  }
});

const AddressSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  }
});

const Transaction = mongoose.model("Transaction", TransactionSchema);
const Address = mongoose.model("Address", AddressSchema);

module.exports = { Transaction, Address };