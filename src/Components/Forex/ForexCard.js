import React from "react";
import { useState } from "react";
import ForexNavigation from "./ForexNavigation";
import ForexConvert from "./ForexConvert";
import ForexChart from "./ForexChart";
import ConvertTable from "./ConvertTable";
import ExChart from "./ExChart";
import { styles } from "../../styles";
import CurrencyInfo from "./CurrencyInfo";

const ForexCard = () => {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <ForexConvert />;
      case 2:
        return <ForexChart />;

      default:
        return <ForexConvert />;
    }
  };
  return (
    <>
      <div className="w-full h-auto min-h-[300px] rounded-xl bg-tertiary shadow-card1">
        <ForexNavigation active={active} setActive={setActive} />
        <main className="z-10">{displayData()}</main>
      </div>
      <div>
        <h1 className={`${styles.heroHeadText} text-white mt-10  `}>
          Currency Convert Table
        </h1>
        <ConvertTable />
      </div>
      <div>
        <h1 className={`${styles.heroHeadText} text-white mt-10  `}>
          Currency Convert Historical Chart
        </h1>
        <ExChart date={false} />
      </div>
      <div>
        <h1 className={`${styles.heroHeadText} text-white mt-10 `}>
          Currency Information
        </h1>
        <CurrencyInfo />
      </div>
    </>
  );
};

export default ForexCard;
