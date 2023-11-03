import React, { useState } from "react";
import { styles } from "../../styles";
import { CryptoState } from "../../CryptoContext";
import { numberWithCommas } from "../Banner/Carousel";
import CoinInfo from "../CoinInfo";

const CryptoWishlist = () => {
  const { watchlist, coins, symbol } = CryptoState();
  const [openItems, setOpenItems] = useState({});

  const toggleAccordion = (coinId) => {
    setOpenItems((prevState) => {
      const newState = { [coinId]: !prevState[coinId] };

      // Close all other items
      for (const id in prevState) {
        if (id !== coinId) {
          newState[id] = false;
        }
      }

      return newState;
    });
  };

  return (
    <div>
      <h2 className={`${styles.sectionHeadText} flex justify-center my-2`}>
        Crypto Wishlist
      </h2>
      <div className={`${styles.paddingX} py-1`}>
        {coins.map((coin) => {
          if (watchlist.includes(coin.id)) {
            const profit = coin.price_change_percentage_24h > 0;
            return (
              <div
                key={coin.id}
                className={`flex flex-col p-3 border-2 my-4 rounded-xl ${
                  profit > 0 ? "border-emerald-400" : "border-red-400"
                }`}
              >
                <div
                  className="flex justify-between gap-10 cursor-pointer mx-2"
                  onClick={() => toggleAccordion(coin.id)}
                >
                  <img
                    src={coin?.image}
                    alt={coin.name}
                    style={{ marginBottom: 10, height: 50, zIndex: 2 }}
                  />
                  <div className="flex flex-col">
                    <span className="uppercase font-semibold text-xl">
                      {coin.symbol}
                    </span>
                    <span className="text-gray-300">{coin.name}</span>
                  </div>
                  <div>
                    {symbol} {numberWithCommas(coin.current_price.toFixed(2))}
                  </div>
                  <div
                    style={{
                      color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                      fontWeight: 500,
                    }}
                  >
                    {profit && "+"}
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </div>
                  <div>
                    {symbol}{" "}
                    {numberWithCommas(coin.market_cap.toString().slice(0, -6))}M
                  </div>
                </div>
                {openItems[coin.id] && (
                  <div className=" w-[80vw] h-full ">
                    <CoinInfo coin={coin} id={coin.id} />
                  </div>
                )}
              </div>
            );
          } else return <></>;
        })}
      </div>
    </div>
  );
};

export default CryptoWishlist;
