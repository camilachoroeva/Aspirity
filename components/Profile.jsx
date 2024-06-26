import React from "react";
import Image from "next/image";
import Avatar from "@/public/assets/img/avatar.png";

export default function Profile({ data }) {
  return (
    <div className="w-full bg-bg_gray rounded-xl py-8">
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col justify-center items-center gap-y-6 md:justify-start md:items-start md:pl-10">
          <div className="flex flex-col justify-center items-center gap-y-4 md:flex-row md:justify-start md:items-start">
            <Image
              src={Avatar}
              alt="avatar"
              width={160}
              height={160}
            />
            <div className="flex flex-col justify-center items-center gap-y-6 md:justify-start md:items-start md:pl-12">
              <div className="flex flex-col justify-center items-center text-primary text-2xl font-bold md:justify-start md:items-start md:text-5xl md:pt-7">
                <p>{data.surname}</p>
                <div className="flex md:mt-2">
                  <p>{data.name}&nbsp;</p>
                  <p>{data.secondName}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-y-4 md:justify-start md:items-start md:mt-3">
                <p className="text-base text-primary">{data.position}</p>
                <div className="flex justify-center items-center gap-x-2">
                  <p className="text-base text-primary">{data.location}</p>
                  <div className="bg-tetriary w-1 h-1 rounded-full"></div>
                  <p className="text-base text-tetriary">{data.time}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex ml-4 overflow-x-auto text-xs text-nowrap font-semibold">
          <div className="border-b-2 px-4 pb-2 pt-2 border-b-gray">
            <p className=" text-secondary hover:text-primary cursor-pointer">
              ОСНОВНАЯ ИНФОРМАЦИЯ
            </p>
          </div>
          <div className="border-b-4 px-4 pb-2 pt-2 border-b-accent">
            <p className="text-primary hover:text-blue cursor-pointer">
              ОТПУСК
            </p>
          </div>
          <div className="border-b-2 px-4 pb-2 pt-2 border-b-gray">
            <p className=" text-secondary hover:text-primary cursor-pointer">
              ОБОРУДОВАНИЕ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}