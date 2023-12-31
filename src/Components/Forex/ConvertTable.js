import React, { useEffect, useState } from "react";
import { styles } from "../../styles";
import {
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { CryptoState } from "../../CryptoContext";
import axios from "axios";
import { CurrencyConvert } from "../../config/api";
import { currencies } from "../../constants";

const ConvertTable = () => {
  const { baseCurrency, targetCurrency } = CryptoState();
  const [firstTable, setFirstTable] = useState(null);
  const [secondTable, setSecondTable] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const amount = 1;

  useEffect(() => {
    // Fetch exchange rate for 1 INR to USD from your API
    const fetchFirstTable = async () => {
      try {
        const { data } = await axios.get(
          CurrencyConvert(amount, baseCurrency, targetCurrency)
        );
        setFirstTable(data.rates);
        setIsLoading(false);
        // console.log(firstTable)
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    const fetchSecondTable = async () => {
      try {
        const { data } = await axios.get(
          CurrencyConvert(amount, targetCurrency, baseCurrency)
        );
        setSecondTable(data.rates);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchFirstTable();
    fetchSecondTable();
  }, [baseCurrency, targetCurrency]);

  const amountsToConvert = [1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000];
  return (
    <div className=" mt-10 flex justify-center text-center gap-5 ">
      <div className="w-1/2">
        <h1 className={`${styles.heroSubText} text-white font-semibold`}>
          Convert{" "}
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
        </h1>
        <TableContainer className="">
          {isLoading ? (
            <LinearProgress style={{ backgroundColor: "#00C9C8" }} />
          ) : (
            <Table>
              <TableHead style={{ backgroundColor: "#00C9C8" }}>
                <TableRow>
                  <TableCell
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontFamily: "Montserrat",
                    }}
                    align="center"
                  >
                    <div className=" flex justify-center items-center gap-3">
                      <img
                        src={
                          currencies[
                            currencies.findIndex(
                              (currency) => currency.value === baseCurrency
                            )
                          ].img
                        }
                        alt="flag"
                        className=" h-10 w-10"
                      />
                      {baseCurrency}
                    </div>
                  </TableCell>
                  <TableCell
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontFamily: "Montserrat",
                    }}
                    align="center"
                  >
                    <div className=" flex justify-center items-center gap-3">
                      <img
                        src={
                          currencies[
                            currencies.findIndex(
                              (currency) => currency.value === targetCurrency
                            )
                          ].img
                        }
                        alt="flag"
                        className=" h-10 w-10"
                      />
                      {targetCurrency}
                    </div>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {firstTable !== null &&
                  amountsToConvert.map((amount, index) => (
                    <TableRow
                      key={index}
                      className="bg-[#16171a] transition duration-300 hover:bg-[#131111]"
                    >
                      <TableCell align="center" className=" text-white">
                        {amount} {baseCurrency}
                      </TableCell>
                      <TableCell align="center" className=" text-white">
                        {(amount * firstTable[targetCurrency]).toFixed(6)}{" "}
                        {targetCurrency}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </div>
      <div className="w-1/2">
        <h1 className={`${styles.heroSubText} text-white font-semibold`}>
          Convert{" "}
          {
            currencies[
              currencies.findIndex(
                (currency) => currency.value === targetCurrency
              )
            ].label
          }{" "}
          to{" "}
          {
            currencies[
              currencies.findIndex(
                (currency) => currency.value === baseCurrency
              )
            ].label
          }
        </h1>
        <TableContainer className="">
          {isLoading ? (
            <LinearProgress style={{ backgroundColor: "#00C9C8" }} />
          ) : (
            <Table>
              <TableHead style={{ backgroundColor: "#00C9C8" }}>
                <TableRow>
                  <TableCell
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontFamily: "Montserrat",
                    }}
                    align="center"
                  >
                    <div className=" flex justify-center items-center gap-3">
                      <img
                        src={
                          currencies[
                            currencies.findIndex(
                              (currency) => currency.value === targetCurrency
                            )
                          ].img
                        }
                        alt="flag"
                        className=" h-10 w-10"
                      />
                      {targetCurrency}
                    </div>
                  </TableCell>
                  <TableCell
                    style={{
                      color: "black",
                      fontWeight: "700",
                      fontFamily: "Montserrat",
                    }}
                    align="center"
                  >
                    <div className=" flex justify-center items-center gap-3">
                      <img
                        src={
                          currencies[
                            currencies.findIndex(
                              (currency) => currency.value === baseCurrency
                            )
                          ].img
                        }
                        alt="flag"
                        className=" h-10 w-10"
                      />
                      {baseCurrency}
                    </div>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {secondTable !== null &&
                  amountsToConvert.map((amount, index) => (
                    <TableRow

                      key={index}
                      className="bg-[#16171a] transition hover:bg-[#131111]"
                    >
                      <TableCell  align="center" className=" text-white">
                        {amount} {targetCurrency}
                      </TableCell>
                      <TableCell align="center" className=" text-white">
                        {amount * secondTable[baseCurrency]} {baseCurrency}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </div>
    </div>
  );
};

export default ConvertTable;
