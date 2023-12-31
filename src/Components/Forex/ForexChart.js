import React, { useState } from "react";
import { CryptoState } from "../../CryptoContext";
import { currencies } from "../../constants";
import ExChart from "./ExChart";

const ForexChart = () => {
  const { baseCurrency, setBaseCurrency, targetCurrency, setTargetCurrency } =
    CryptoState();

  const [showChart, setShowChart] = useState(false);

  const handleBaseCurrencyChange = (selectedOption) => {
    setBaseCurrency(selectedOption.target.value);
    setShowChart(false);
  };

  const handleTargetCurrencyChange = (selectedOption) => {
    setTargetCurrency(selectedOption.target.value);
    setShowChart(false);
  };

  const handleExchangeClick = () => {
    // Swap values of baseCurrency and targetCurrency
    const temp = baseCurrency;
    setBaseCurrency(targetCurrency);
    setTargetCurrency(temp);
    setShowChart(false);
  };

  const handleViewChartClick = () => {
    setShowChart(true);
  };

  return (
    <div>
      <div>
        <div className="flex justify-around">
          <div className="flex flex-col gap-2 w-1/3">
            <div className=" text-lg font-medium leading-none shad-form_label">
              From
            </div>
            <select
              value={baseCurrency}
              onChange={handleBaseCurrencyChange}
              className="flex h-10 w-full rounded-md border-none px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shad-input"
            >
              <option value="" disabled>
                Select Currency
              </option>
              {currencies.map((currency) => (
                <>
                  <option key={currency.value} value={currency.value}>
                    <img src={currency.img} alt="img" height={20} width={20} />
                    {currency.label}
                  </option>
                </>
              ))}
            </select>
          </div>
          <img
            src="/assets/icons/exchange.svg"
            alt="exchange"
            className="border-[#00C9C8] border-4 rounded-full w-12 h-12 mt-3 cursor-pointer"
            onClick={handleExchangeClick}
          />
          <div className="flex flex-col gap-2 w-1/3">
            <div className=" text-lg font-medium leading-none shad-form_label">
              To
            </div>
            <select
              value={targetCurrency}
              onChange={handleTargetCurrencyChange}
              className="flex h-10 w-full rounded-md border-none px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shad-input"
            >
              <option value="" disabled>
                Select Currency
              </option>
              {currencies.map((currency) => (
                <>
                  {/* <img src={currency.img} alt="img" /> */}
                  <option key={currency.value} value={currency.value}>
                    {currency.label}
                  </option>
                </>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="shad-button_primary font-semibold mx-14 my-10 "
          onClick={handleViewChartClick}
        >
          View Chart
        </button>
      </div>
      {showChart && <ExChart date={true} />}
    </div>
  );
};

export default ForexChart;
