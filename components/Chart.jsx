"use client";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function DonutChart ({ item, selectedStat }) {
  const [isMounted, setIsMounted] = useState(false);
  const [totalDays, setTotalDays] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const total = item.stats.reduce((acc, stat) => acc + stat.daysNumber, 0);
    setTotalDays(total);
  }, [item.stats]);

  if (!isMounted) {
    return null;
  }

  const stats = item.stats;
  const statToHighlight = stats.find((stat) => stat.name === selectedStat);

  const data = stats.map((stat) => ({
    ...stat,
  }));

  const daysLabel = (daysNumber) => {
    return daysNumber % 10 > 4 || daysNumber % 10 === 0
      ? "дней"
      : "дня"
  };

  return (
    <div className="relative">
      <PieChart width={180} height={180}>
        <Pie
          data={data}
          dataKey="daysNumber"
          nameKey="name"
          innerRadius="70%"
          outerRadius="80%"
          startAngle={220}
          endAngle={580}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              strokeWidth={selectedStat === entry.name ? 8 : 0}
              stroke={selectedStat === entry.name ? entry.color : null}
              fill={entry.color}
            />
          ))}
        </Pie>
      </PieChart>
      <div className="absolute inset-0 flex flex-col justify-center items-center ml-4">
        <div className="text-4xl text-primary font-normal">
          {statToHighlight ? statToHighlight.daysNumber : totalDays}
        </div>
        <div className="text-sm text-tetriary">
          {daysLabel(statToHighlight ? statToHighlight.daysNumber : totalDays)}
        </div>
      </div>
    </div>
  );
};