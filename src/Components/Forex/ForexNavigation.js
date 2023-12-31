import React from "react";
import { forexMenuItems } from "../../Utils/forexMenuItems";

const ForexNavigation = ({ active, setActive }) => {
  return (
    <div className="">
      <ul className="flex cursor-pointer justify-around p-3 z-10">
        {forexMenuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`${
                active === item.id ? "" : "text-secondary"
              } flex gap-3 `}
            >
              <div className="text-[20px]">{item.icon}</div>
              <span className="text-[20px] font-semibold ">{item.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ForexNavigation;
