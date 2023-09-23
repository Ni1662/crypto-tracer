import React from "react";
import { CryptoState } from "../../CryptoContext";
import styled from "styled-components";
import IncomeItem from "./IncomeItem";

const UserProfile = () => {
  const { user, userinfo, incomes, deleteIncome, expenses, deleteExpense } =
    CryptoState();

  return (
    <UserStyled>
      <div className="user-pro">
        <div className="user-con">
          <img src={user?.photoURL} alt="" />
          <div className="text">
            <h2>{userinfo?.name}</h2>
            <p>{userinfo?.username}</p>
          </div>
        </div>
        <p>{userinfo.bio}</p>
      </div>
      <div className="income-content">
        <h3>All Transaction</h3>
        <div className="incomes">
          {incomes.map((income) => {
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
                deleteItem={deleteIncome}
              />
            );
          })}
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
    </UserStyled>
  );
};

const UserStyled = styled.nav`
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #00c9c8;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 201, 200, 0.06);
    }
    h2 {
      color: rgba(255, 255, 255, 1);
    }
    p {
      color: rgba(255, 255, 255, 0.6);
    }
  }
  .user-pro {
    gap: 1rem;
    color: rgba(255, 255, 255, 0.8);
  }
  .income-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    .incomes {
      flex: 1;
    }
  }
`;

export default UserProfile;
