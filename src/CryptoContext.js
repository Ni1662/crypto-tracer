import axios from "axios";
import React, { useContext, createContext, useState, useEffect } from "react";
import { CoinList } from "./config/api";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import { addDoc, collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  });
  const [watchlist, setWatchlist] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    if (user) {
      const coinRef = doc(db, "watchlist", user.uid);

      var unsubscribe = onSnapshot(coinRef, (coin) => {
        if (coin.exists()) {
          console.log(coin.data().coins);
          setWatchlist(coin.data().coins);
        } else {
          console.log("No Items in Watchlist");
        }
      });
      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  });

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  const addIncomeRecord = async (incomeData) => {
    try {
      if (user) {
        const userIncomesRef = collection(db, 'users', user.uid, 'incomes');
        await addDoc(userIncomesRef, incomeData);
      }
    } catch (error) {
      console.error('Error adding income record:', error);
    }
  };

  const deleteIncomeRecord = async (incomeId) => {
    try {
      if (user) {
        const incomeRef = doc(db, 'users', user.uid, 'incomes', incomeId);
        await deleteDoc(incomeRef);
      }
    } catch (error) {
      console.error('Error deleting income record:', error);
    }
  };

  const addExpenseRecord = async (expenseData) => {
    try {
      if (user) {
        const userExpensesRef = collection(db, 'users', user.uid, 'expenses');
        await addDoc(userExpensesRef, expenseData);
      }
    } catch (error) {
      console.error('Error adding expense record:', error);
    }
  };

  const deleteExpenseRecord = async (expenseId) => {
    try {
      if (user) {
        const expenseRef = doc(db, 'users', user.uid, 'expenses', expenseId);
        await deleteDoc(expenseRef);
      }
    } catch (error) {
      console.error('Error deleting expense record:', error);
    }
  };

  return (
    <Crypto.Provider
      value={{
        currency,
        symbol,
        setCurrency,
        coins,
        loading,
        fetchCoins,
        alert,
        setAlert,
        user,
        watchlist,
        incomes,
        addIncomeRecord,
        deleteIncomeRecord,
        expenses,
        addExpenseRecord,
        deleteExpenseRecord,
      }}
    >
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
