import React, { useEffect, useState } from "react";
import { currentTransactions, addresses } from "../data";
export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [balance, setBalance] = useState(0)
  const [transactions, setTransactions] = useState([])
  console.log();
  const [currentWallet, setCurrentWallet] = useState("")
  const [receipt, setReceipt] = useState(false)
  
  const getBalance = async () => {
    const plusTransactions = transactions.filter(trans => trans.to === currentWallet
      )
      const minusTransactions = transactions.filter(trans => trans.from === currentWallet
        )
        const plusSum = await plusTransactions.reduce((total, obj) => total + obj.value, 0)
        const minusSum = await minusTransactions.reduce((total, obj) => total + obj.value, 0)
        console.log(plusTransactions, minusTransactions)
        console.log(plusSum, minusSum);
        const newBalance = plusSum - minusSum
    setBalance(newBalance)
    console.log("transactions", transactions);
  }
      
  useEffect(() => {
    console.log("This stuff", currentTransactions);
    setTransactions(currentTransactions)
    setCurrentWallet(addresses[0])
  }, [])
  
    return (
        <AppContext.Provider
        value={{
        balance,
        setBalance,
        addresses,
          transactions,
        setTransactions,
        currentWallet,
        getBalance,
        receipt,
        setReceipt
      }}
    >
      { children }
    </AppContext.Provider>
  )
}