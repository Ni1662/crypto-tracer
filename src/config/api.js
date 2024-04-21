import { calculateDateRange } from "./data";

const forexapi = "pzMJD4UKXRfFDZpYbSUh";

// Crypto Currency
export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

// Forex
export const CurrencyConvert = (amount = 1, baseCurrency, targetCurrency) =>
  `https://api.frankfurter.app/latest?amount=${amount}&from=${baseCurrency}&to=${targetCurrency}`;

export const ForexHistoricalChart = (baseCurrency, targetCurrency, period) => {
  const { startDate, endDate } = calculateDateRange(period);
  let interval;
  switch (period) {
    case "24hr":
      interval = "minute&period=5";
      break;
    case "30d":
      interval = "hourly&period=1";
      break;
    case "3mo":
      interval = "daily&period=5";
      break;
    case "1yr":
      interval = "daily&period=1";
      break;
    default:
      // Default to daily for other periods
      interval = "daily&period=1";
      break;
  }
  return `https://marketdata.tradermade.com/api/v1/timeseries?api_key=${forexapi}&currency=${
    baseCurrency + targetCurrency
  }&format=records&start_date=${startDate}&end_date=${endDate}&interval=${interval}`;
};
