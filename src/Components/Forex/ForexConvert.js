import React, { useEffect, useState } from "react";
import { currencies } from "../../constants";
import { CryptoState } from "../../CryptoContext";
import { CurrencyConvert } from "../../config/api";
import axios from "axios";

const ForexConvert = () => {
  const [amount, setAmount] = useState(1);
  const [exchangeRates, setExchangeRates] = useState({});

  const { baseCurrency, setBaseCurrency, targetCurrency, setTargetCurrency } =
    CryptoState();

  const handleBaseCurrencyChange = (selectedOption) => {
    setBaseCurrency(selectedOption.target.value);
  };

  const handleTargetCurrencyChange = (selectedOption) => {
    setTargetCurrency(selectedOption.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleExchangeClick = () => {
    // Swap values of baseCurrency and targetCurrency
    const temp = baseCurrency;
    setBaseCurrency(targetCurrency);
    setTargetCurrency(temp);
  };

  const handleConvertClick = async () => {
    try {
      const { data } = await axios.get(
        CurrencyConvert(amount, baseCurrency, targetCurrency)
      );
      setExchangeRates(data.rates);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };

  useEffect(() => {
    if (targetCurrency && exchangeRates[targetCurrency] !== undefined) {
      console.log("Converted Value:", exchangeRates[targetCurrency]);
    }
  }, [exchangeRates, targetCurrency]);

  return (
    <div className="m-10">
      <div className="flex justify-around">
        <div className="flex flex-col gap-2 w-1/4">
          <div className=" text-lg font-medium leading-none shad-form_label">
            Amount
          </div>
          <input
            required="required"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Amount"
            name="text"
            autocomplete="off"
            className="flex h-10 w-full rounded-md border-none px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shad-input"
          />
        </div>
        <div className="flex flex-col gap-2 w-1/4">
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
        <div className="flex flex-col gap-2 w-1/4">
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
      <div className="flex m-8 items-center">
        <button
          type="submit"
          className="shad-button_primary font-semibold "
          onClick={handleConvertClick}
        >
          Covert
        </button>
        {exchangeRates && (
          <div className="text-lg font-medium leading-none ml-10">
            Converted Value:{" "}
            {baseCurrency === targetCurrency
              ? amount
              : exchangeRates[targetCurrency]}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForexConvert;
