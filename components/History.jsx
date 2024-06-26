"use client";
import { useState } from "react";
import Modal from "@/components/Modal";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const History = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const vacationHistory = item.vacationHistory;

  return (
    <div className="flex flex-col bg-bg_gray rounded-xl px-4 py-8 w-full md:px-7 md:pt-7 md:ml-4 md:min-w-4/6 md:max-w-[962px]">
      <div className="flex flex-col gap-y-4">
        <div className="flex justify-between items-center">
          <p className="text-md md:text-2xl text-primary">История отпусков</p>
          <p
            className="text-sm text-tetriary font-medium hover:text-primary cursor-pointer"
            onClick={openModal}
          >
            Посмотреть все
          </p>
        </div>

        <div className="md:hidden">
          {vacationHistory.map((item, index) => (
            <div key={item.id} className="flex flex-col mb-4 gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-tetriary">Тип</p>
                <p className="text-primary">{item.type}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-tetriary">Даты отпуска</p>
                <div className="flex gap-x-3 text-secondary">
                  <div>{item.start}</div>
                  <ArrowRightIcon
                    className={`size-6 border-1 ${
                      item.type === "Отпуск" ? "text-yellow" : "text-error"
                    }`}
                  />
                  <div>{item.finish}</div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-tetriary">Количество дней</p>
                <p className="text-primary">{item.daysNumber}</p>
              </div>
              {index !== vacationHistory.length - 1 && (
                <div className="w-full mt-2">
                  <div className="h-0.5 bg-gray"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <table className="hidden md:table">
          <thead className="border-b border-gray text-secondary">
            <tr>
              <th className="px-2 py-4 text-left w-[33.3%]">Тип</th>
              <th className="px-2 py-4 text-left w-[33.3%]">Даты отпуска</th>
              <th className="px-2 py-4 text-right">Количество дней</th>
            </tr>
          </thead>
          <tbody>
            {vacationHistory.map((item, index) => (
              <tr
                key={item.id}
                className={
                  index !== vacationHistory.length - 1 ? "border-b border-gray" : ""
                }
              >
                <td className="px-2 py-4 text-left text-base text-primary">
                  {item.type}
                </td>
                <td className="flex justify-start gap-x-3 px-2 py-4 text-left text-base text-primary">
                  <div>{item.start}</div>
                  <ArrowRightIcon
                    className={`size-5 ${
                      item.type === "Отпуск" ? "text-yellow" : "text-error"
                    }`}
                  />
                  <div>{item.finish}</div>
                </td>
                <td className="px-2 py-4 text-right text-base text-primary">
                  {item.daysNumber}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal isOpen={isModalOpen} close={closeModal} vacationHistory={vacationHistory} />
      </div>
    </div>
  );
};

export default History;