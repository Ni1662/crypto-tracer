import axios from "axios";
import React, { useContext, createContext, useState, useEffect } from "react";
import { CoinList } from "./config/api";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, onSnapshot } from "firebase/firestore";

const USER_URL = "https://crypto-backend-roan.vercel.app/api/users";
const INCOME_URL = "https://crypto-backend-roan.vercel.app/api/income";
const EXPENSE_URL = "https://crypto-backend-roan.vercel.app/api/expense";

// const USER_URL = "https://mirror-humble-chameleon.glitch.me/api/users";
// const INCOME_URL = "https://mirror-humble-chameleon.glitch.me/api/income";
// const EXPENSE_URL = "https://mirror-humble-chameleon.glitch.me/api/expense";

// https://crypto-backend-roan.vercel.app/
// https://mirror-humble-chameleon.glitch.me/

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [onboard, setOnboard] = useState(false);
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [userinfo, setUserinfo] = useState(null);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  });
  const [watchlist, setWatchlist] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  // const [photo, setPhoto] = useState("");

  // useEffect(() => {
  //   setPhoto(user?.uid);
  // }, [user]);
  useEffect(() => {
    if (user) {
      const coinRef = doc(db, "watchlist", user.uid);

      var unsubscribe = onSnapshot(coinRef, (coin) => {
        if (coin.exists()) {
          // console.log(coin.data().coins);
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

  // Profile Expense tracker
  const fetchUser = async (uid) => {
    try {
      const response = await axios.get(`${USER_URL}/getuser/${uid}`);
      const onboardedValue = response.data.onboarded;
      setOnboard(onboardedValue);
      setUserinfo(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUser(user?.uid);
    }
  }, [user]);

  // income
  const addIncome = async (income) => {
    try {
      const response = await axios.post(`${INCOME_URL}/addincome`, income);
      console.log(income);
      if (response.status === 200) {
        console.log("Income added successfully");
        getIncomes();
      } else {
        console.error("Failed to add income");
        setError("Failed to add income");
      }
    } catch (error) {
      console.error("Error adding income:", error);
      setError("Error adding income");
    }
  };

  const getIncomes = async (userId) => {
    try {
      const response = await axios.get(`${INCOME_URL}/getincome/${userId}`);

      if (response.status === 200) {
        setIncomes(response.data);
        // console.log(response.data);
      } else {
        console.error("Failed to fetch incomes");
      }
    } catch (error) {
      console.error("Error fetching incomes:", error);
    }
  };

  const deleteIncome = async (userId, incomeId) => {
    try {
      const response = await axios.delete(
        `${INCOME_URL}/deleteincome/${userId}/${incomeId}`
      );

      if (response.status === 200) {
        getIncomes(userId);
      } else {
        console.error("Failed to delete income");
      }
    } catch (error) {
      console.error("Error deleting income:", error);
    }
  };

  const totalIncome = (userId) => {
    // Filter incomes by user ID
    const userIncomes = incomes.filter((income) => income.user === userId);

    // Calculate the total income for the user
    let totalIncome = 0;
    userIncomes.forEach((income) => {
      totalIncome += income.amount;
    });

    return totalIncome;
  };

  //expense
  const addExpense = async (expense) => {
    try {
      const response = await axios.post(`${EXPENSE_URL}/addexpense`, expense);

      if (response.status === 200) {
        console.log("Expense added successfully");
        getExpenses(expense.userId);
      } else {
        console.error("Failed to add expense");
        setError("Failed to add expense");
      }
    } catch (error) {
      console.error("Error adding expense:", error);
      setError("Error adding expense");
    }
  };

  const getExpenses = async (userId) => {
    try {
      const response = await axios.get(`${EXPENSE_URL}/getexpense/${userId}`);

      if (response.status === 200) {
        setExpenses(response.data);
        // console.log(response.data);
      } else {
        console.error("Failed to fetch expenses");
      }
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const deleteExpense = async (userId, expenseId) => {
    try {
      const response = await axios.delete(
        `${EXPENSE_URL}/deleteexpense/${userId}/${expenseId}`
      );

      if (response.status === 200) {
        getExpenses(userId);
      } else {
        console.error("Failed to delete expense");
      }
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  const totalExpense = (userId) => {
    // Filter expenses by user ID
    const userExpenses = expenses.filter((expense) => expense.user === userId);

    // Calculate the total expense for the user
    let totalExpense = 0;
    userExpenses.forEach((expense) => {
      totalExpense += expense.amount;
    });

    return totalExpense;
  };

  const totalBalance = (userId) => {
    // Calculate total income and total expenses for the user
    const userTotalIncome = totalIncome(userId);
    const userTotalExpenses = totalExpense(userId);

    // Calculate the total balance by subtracting total expenses from total income
    const userTotalBalance = userTotalIncome - userTotalExpenses;

    return userTotalBalance;
  };

  const transactionHistory = (userId) => {
    // Combine both income and expense arrays into a single history array
    const history = [...incomes, ...expenses];

    // Sort the history array by createdAt in descending order (most recent first)
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    // Return the top 3 most recent transactions
    return history.slice(0, 3);
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
        onboard,
        fetchUser,
        setOnboard,
        userinfo,
        setUserinfo,
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        totalIncome,
        error,
        setError,
        expenses,
        addExpense,
        getExpenses,
        deleteExpense,
        totalExpense,
        totalBalance,
        transactionHistory,
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
