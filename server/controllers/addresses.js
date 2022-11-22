const { Address, Transaction } = require("../model")

const getAddresses = async (req, res) => {
    const addresses = await Address.find();
    res.status(200).json({ addresses })
}

const getBalance = async (req, res) => {
    const wallet = req.params.address
    console.log("LUKE");
    console.log(req.params);
    const transactions = await Transaction.find({destination: wallet })
    
    const plusTransactions = await transactions.filter(
        (trans) => trans.destination === wallet
    );
    
    const minusTransactions = await transactions.filter(
        (trans) => trans.source === wallet
    );
    
    const plusSum = await plusTransactions.reduce(
        (total, obj) => total + obj.amount,
        0
    );
    
    const minusSum = await minusTransactions.reduce(
        (total, obj) => total + obj.amount,
        0
    );
    
    const newBalance = plusSum - minusSum;
    console.log(wallet, newBalance);

    return res.status(200).json({account: {
        address: wallet,
        balance: newBalance
    }})
}

const createAddress = async (req, res) => {
    const address = await Address.create(req.body)
    return res.status(200).json({ data: address})
}

module.exports = { getAddresses, getBalance, createAddress }
