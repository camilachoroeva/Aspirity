import React from "react";
import Profile from "@/components/Profile";
import Stats from "@/components/Stats";
import History from "@/components/History";
import Header from "@/components/Header";
import Back from "@/components/Back";
import data from "@/public/data/data.json";

export default function page() {
  return (
    <div className="2xl:container mx-auto">
      <Header />
      <Back />
      <div className="flex flex-col gap-y-4 md:flex-row md:flex-wrap 2xl:container 2xl:mx-auto">
        <Profile data={data[0]} />
        <div className="md:flex md:w-full">
          <Stats item={data[0]} />
          <History item={data[0]} />
        </div>
      </div>
    </div>
  );
}
