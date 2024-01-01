import React, { useEffect, useState } from "react";
import { CryptoState } from "../../CryptoContext";
import { currencies } from "../../constants";
import { CurrencyConvert, ForexHistoricalChart } from "../../config/api";
import axios from "axios";
import {
  CircularProgress,
  ThemeProvider,
  createTheme,
} from "@material-ui/core";
import { ForexDate, calculateDateRange } from "../../config/data";
import SelectButton from "../SelectButton";
import { Line } from "react-chartjs-2";
import { CategoryScale, registerables } from "chart.js";
import { Chart } from "chart.js";

Chart.register(CategoryScale);
Chart.register(...registerables);

const ExChart = ({ date }) => {
  const { baseCurrency, targetCurrency } = CryptoState();
  const [historicData, setHistoricData] = useState();
  const [period, setPeriod] = useState("24hr");
  const [flag, setflag] = useState(false);
  const [percentageChange, setPercentageChange] = useState(null);

  const [value, setValue] = useState({});

  // const period = '24hr'; // You can change this to '30d', '3mo', '1yr', or any other supported period
  const dateRange = calculateDateRange(period);
  console.log(dateRange);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const amount = 1;
        const { data } = await axios.get(
          CurrencyConvert(amount, baseCurrency, targetCurrency)
        );
        setValue(data.rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchData();
  }, [baseCurrency, targetCurrency]);

  const fetchHistoricData = async () => {
    const { data } = await axios.get(
      ForexHistoricalChart(baseCurrency, targetCurrency, period)
    );
    setflag(true);
    setHistoricData(data.quotes);
  };

  // console.log("data", historicData.length);

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [period, baseCurrency, targetCurrency]);

  useEffect(() => {
    if (historicData && historicData.length >= 2 && flag === true) {
      const start = historicData[0].close;
      const end = historicData[historicData.length - 1].close;

      console.log(end, start);

      const changePercentage = ((end - start) / start) * 100;

      setPercentageChange(changePercentage);
    }
  }, [historicData, flag]);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <>
      <div className="flex justify-between m-14 mt-10">
        <div>
          <h2 className=" font-bold">
            {baseCurrency} to {targetCurrency} Chart{" "}
            <span
              className={`font-bold ${
                percentageChange >= 0 ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {percentageChange && percentageChange.toFixed(3)}%
            </span>{" "}
            in {period}
          </h2>
          <p className=" text-secondary">
            {
              currencies[
                currencies.findIndex(
                  (currency) => currency.value === baseCurrency
                )
              ].label
            }{" "}
            to{" "}
            {
              currencies[
                currencies.findIndex(
                  (currency) => currency.value === targetCurrency
                )
              ].label
            }
          </p>
        </div>
        <h4 className=" font-semibold">
          1 {baseCurrency} = {value[targetCurrency]} {targetCurrency}
        </h4>
      </div>
      <ThemeProvider theme={darkTheme}>
        <div className="mx-auto flex flex-col items-center justify-center mt-25 p-40 md:w-full md:mt-0 md:p-20 md:pt-0">
          {!historicData | (flag === false) ? (
            <CircularProgress
              style={{ color: "#00C9C8" }}
              size={250}
              thickness={1}
            />
          ) : (
            <>
              {date && (
                <div
                  style={{
                    display: "flex",
                    margin: 20,
                    justifyContent: "space-around",
                    width: "100%",
                  }}
                >
                  {ForexDate.map((day) => (
                    <SelectButton
                      key={day.value}
                      onClick={() => {
                        setPeriod(day.value);
                        setflag(false);
                      }}
                      selected={day.value === period}
                    >
                      {day.label}
                    </SelectButton>
                  ))}
                </div>
              )}
              <Line
                data={{
                  labels: historicData.map((dataPoint) => {
                    const date = new Date(dataPoint.date);

                    if (period === "24hr") {
                      // Show time if days = 1
                      const time =
                        date.getHours() > 12
                          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                          : `${date.getHours()}:${date.getMinutes()} AM`;
                      return time;
                    } else {
                      // Show date for other periods
                      return date.toLocaleDateString();
                    }
                  }),
                  datasets: [
                    {
                      data: historicData.map((dataPoint) => dataPoint.close),
                      label: `${baseCurrency} to ${targetCurrency} rates in ${period}`,
                      borderColor: "#00C9C8",
                    },
                  ],
                }}
                options={{
                  elements: {
                    point: {
                      radius: 1,
                    },
                  },
                }}
              ></Line>
            </>
          )}
        </div>
      </ThemeProvider>
    </>
  );
};

export default ExChart;
