import React from "react";
import { CryptoState } from "../../CryptoContext";
import { currencies } from "../../constants";

const CurrencyCard = ({ currency }) => {
  const { value, label, img, description } = currency;
  return (
    <div className="xs:w-full w-[550px]">
      <div className="w-full green-pink-gradient p-[10px] rounded-[20px] shadow-card">
        <div className="flex items-center gap-2 m-6">
          <img
            src={img}
            alt={`${value} flag`}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold ">
            {value} - {label}
          </h3>
        </div>
        <p className="mt-2 m-6 text-secondary text-[17px] max-w-3xl leading-[30px]">
          {description}
        </p>
      </div>
    </div>
  );
};

const CurrencyInfo = () => {
  const { baseCurrency, targetCurrency } = CryptoState();
  const getCurrencyByValue = (currencyValue) =>
    currencies.find((currency) => currency.value === currencyValue);

  const baseCurrencyInfo = getCurrencyByValue(baseCurrency);
  const targetCurrencyInfo = getCurrencyByValue(targetCurrency);

  return (
    <div className="mt-20 flex flex-wrap gap-10 justify-center ">
      <CurrencyCard currency={baseCurrencyInfo} />
      <CurrencyCard currency={targetCurrencyInfo} />
    </div>
  );
};

export default CurrencyInfo;
