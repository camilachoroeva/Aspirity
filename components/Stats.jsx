"use client";
import React, { useState, useRef, useEffect } from "react";
import Chart from "@/components/Chart";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

export default function Stats({ item }) {
  const [selectedStat, setSelectedStat] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef();

  const handleStatSelect = (statName) => {
    setSelectedStat(statName);
  };

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col w-full bg-bg_gray pb-4 rounded-xl gap-y-4 mb-4 md:gap-y-2 md:mb-0 md:min-w-2/6 md:max-w-[516px]">
      <div className="flex flex-row justify-start items-center gap-2 px-4 pt-8 md:px-7 md:pt-7 md:pb-3">
        <p className="text-primary text-base font-medium md:text-2xl md:font-normal">
          Статистика
        </p>
        <div
          className="relative flex items-center"
          onClick={handleMouseEnter}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <InformationCircleIcon className="size-6 border-primary stroke-primary text-bg_gray" />
          {isVisible && (
            <div
              ref={popoverRef}
              className="absolute ml-4 z-10 bg-[#303030] text-primary px-2 py-2 text-sm whitespace-nowrap"
            >
              <p>1 раб. месяц = 3 дня отпуска</p>
            </div>
          )}
        </div>
      </div>
      <div className="place-self-center w-40 h-40">
        <Chart item={item} selectedStat={selectedStat} />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col justify-start items-start px-4 md:px-8 gap-y-2">
          {item.stats.map((stat) => (
            <div
              key={stat.id}
              className={`flex justify-between w-full border-2 border-gray rounded-2xl px-2 py-3 hover:border-primary ${
                selectedStat === stat.name ? "border-2" : ""
              }`}
              onMouseEnter={() => handleStatSelect(stat.name)}
              onMouseLeave={() => handleStatSelect(null)}
            >
              <div className="flex justify-start items-center gap-x-2">
                <div
                  className={`w-2 h-2 rounded-full`}
                  style={{ backgroundColor: stat.color }}
                ></div>
                <div>
                  <p className="text-primary text-base">{stat.name}</p>
                </div>
              </div>
              <div>
                <p className="text-primary">
                  {stat.daysNumber}&nbsp;
                  {stat.daysNumber % 10 > 4 || stat.daysNumber % 10 === 0
                    ? "дней"
                    : "дня"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}