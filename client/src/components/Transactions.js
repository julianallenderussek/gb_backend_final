import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import "./Transactions.css"

const Transactions = () => {
    const { transactions } = useContext(AppContext)

    return (
        <div className='page-wrapper'>
            <div>Number of transaction: {transactions.length}</div>
            <h1>Transaction History</h1>
            {
                transactions.map(transaction => {
                    return <Transaction transaction={transaction} />
                })
            }
        </div>
    );
};

export const Transaction = ({ transaction }) => {
    const { hash, status, timestamp, from, to, value, currency} = transaction  
    return (
        <div className='transaction'>    
            <LabelDiv title="Transaction Hash" data={hash} />
            <LabelDiv title="Status" data={status} />
            <LabelDiv title="Timestamp" data={timestamp} />
            <LabelDiv title="From" data={from} />
            <LabelDiv title="To" data={to} />
            <LabelDiv title="Value" data={value} currency={currency} />
        </div>
    )
}
    
const LabelDiv = ({title, data, currency}) => {
    console.log(data, typeof data);
    return (
        <div className="transaction-label">
            <strong>{title}:</strong>
            <p>{data}</p>
            { currency ? <>{currency}</> : <></> }
        </div>
    )
}

export default Transactions;
