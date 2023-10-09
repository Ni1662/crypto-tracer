import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { dateFormat } from "../../Utils/dateFormat";
import { CryptoState } from "../../CryptoContext";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Chart() {
  const { incomes, expenses } = CryptoState();

  const data = {
    labels: incomes.map((inc) => {
      const { date } = inc;
      return dateFormat(date);
    }),
    datasets: [
      {
        label: "Income",
        data: [
          ...incomes.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        borderColor: "#66E3A9",
        backgroundColor: "#66E3A9",
        tension: 0.2,
      },
      {
        label: "Expenses",
        data: [
          ...expenses.map((expense) => {
            const { amount } = expense;
            return amount;
          }),
        ],
        borderColor: "#FF6347",
        backgroundColor: "#FF6347",
        tension: 0.2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          color: "#DADDE2",
        },
        ticks: {
          color: "#DADDE2",
        },
      },
      y: {
        title: {
          color: "#DADDE2",
        },
        ticks: {
          color: "#DADDE2",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#DADDE2",
        },
      },
    },
  };

  return (
    <ChartStyled>
      <Line data={data} options={options} />
    </ChartStyled>
  );
}

const ChartStyled = styled.div`
  background: transparent;
  border: 2px solid #00c9c8;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  height: 70%;
`;

export default Chart;
