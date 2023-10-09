import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import IncomeItem from "./IncomeItem";
import ExpenseForm from "./ExpenseForm";
import { CryptoState } from "../../CryptoContext";

function Expenses() {
  const { expenses, getExpenses, deleteExpense, totalExpense, user } =
    CryptoState();

  useEffect(() => {
    getExpenses(user.uid);
  });
  return (
    <ExpenseStyled>
      <InnerLayout>
        <h3>Expenses</h3>
        <h4 className="total-income">
          Total Expense: <span>₹{totalExpense(user.uid)}</span>
        </h4>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="incomes">
            {expenses.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      to right bottom,
      rgba(21, 58, 114, 0.5),
      rgba(21, 58, 114, 0.3)
    );
    border: 2px solid #00c9c8;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 1.5rem;
    gap: 0.5rem;
    span {
      font-size: 1.5rem;
      font-weight: 800;
      color: #00c9c8;
    }
  }
  .income-content {
    display: flex;
    gap: 1rem;
    .incomes {
      flex: 1;
    }
  }
`;

export default Expenses;
