import React from "react";
import { Header } from "./Components/Header/Header";
import { Balance } from "./Components/Balance/Balance";
import { IncomeExpenses } from "./Components/IncomeExpenses/IncomeExpenses.jsx";
import { TransactionList } from "./Components/TransactionList/TransactionList.jsx";
import { AddTransaction } from "./Components/AddTransaction/AddTransaction.jsx";
import { GlobalProvider } from "./Context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
