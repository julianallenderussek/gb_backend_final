import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from './AppContext';
import { Transaction } from './Transactions';
import "./Transfer.css"

const Transfer =() => {
    const { id } = useParams();
    const context = useContext(AppContext);
    const { currentWallet, setTransactions, balance,
        getBalance, transactions, receipt, setReceipt } = context;
    const [amount, setAmount] = useState("")

    const handleTransaction = (e) => {
        console.log("receipt", receipt, "----" , "balance:", balance);
        if (amount > 0 && amount < balance) {
            const newTransaction = {
                hash: "kajndfkjndakjnf9189hn19urnj",
                status: "SUCCESS",
                timestamp: Date.now(),
                from: currentWallet,
                to: id,
                value: amount,
                currency: "ETH",
                gas_user: 21000
            }
            
            console.log("newTransaction", newTransaction)
            console.log([...transactions, newTransaction]);
            setTransactions([...transactions, newTransaction])
            getBalance()
            setReceipt(newTransaction)
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        const newAmount = parseInt(e.target.value)
        console.log(newAmount, typeof newAmount );
        setAmount(parseInt(e.target.value))
    }

    useEffect(() => {
        getBalance()
    }, [])
    
    return (
        <div className='page-wrapper'>
            <h1>Transfer</h1>
                <>Current Balance: { balance }</>
            <div className='transaction'>    
                <div className="transaction-label">
                    <strong>From:</strong>
                    <p>{ currentWallet }</p>
                </div>
                <div className="transaction-label">
                    <strong>to:</strong>
                    <p>{ id }</p>
                </div>
                <div className="transaction-label">
                    <strong>Amount:</strong>
                    <input type="number" onChange={handleChange}></input>
                </div>
                <div className="transaction-label">
                    <button onClick={(e) => handleTransaction(e)}>Submit</button>
                </div>
            </div>
            {
                receipt ? <Receipt receipt={receipt} /> : <></>
            }
            
        </div>
    );
};

const Receipt = ({receipt}) => {
    console.log("receipt", receipt);
    return (
        <Transaction transaction={receipt}/>
    )
}

export default Transfer;