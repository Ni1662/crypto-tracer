import React from "react";
import styled from "styled-components";
import { CryptoState } from "../../CryptoContext";

function History() {
  const { transactionHistory } = CryptoState();

  const [...history] = transactionHistory();

  return (
    <HistoryStyled>
      <h2>Recent History</h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <div key={_id} className="history-item">
            <p
              style={{
                color: type === "expense" ? "#FF6347" : "#66E3A9",
              }}
            >
              {title}
            </p>

            <p
              style={{
                color: type === "expense" ? "#FF6347" : "#66E3A9",
              }}
            >
              {type === "expense"
                ? `-${amount <= 0 ? 0 : amount}`
                : `+${amount <= 0 ? 0 : amount}`}
            </p>
          </div>
        );
      })}
    </HistoryStyled>
  );
}

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history-item {
    background: linear-gradient(
      to right bottom,
      rgba(21, 58, 114, 0.5),
      rgba(21, 58, 114, 0.3)
    );
    border: 2px solid #00c9c8;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default History;
