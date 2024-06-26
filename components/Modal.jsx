import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Modal({ isOpen, close, vacationHistory }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 overflow-y-auto bg-black bg-opacity-25 z-10">
      <div className="fixed inset-0 flex items-center justify-center" role="dialog" aria-modal="true">
        <div className="bg-white w-full md:max-w-[900px] text-primary bg-bg_gray transform overflow-hidden rounded-2xl transition-all">
          <div className="flex flex-col bg-gray-200 px-4 py-4 rounded-xl overflow-y-auto max-h-[99vh]">
            <div className="flex justify-between items-center pt-2 pb-6">
              <p className="text-md md:text-3xl ">История отпусков</p>
              <XMarkIcon
                className="h-6 w-6 border-1 cursor-pointer"
                onClick={close}
                aria-label="Close"
              />
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
                        className={`size-6 border-1 ${item.type === "Отпуск" ? "text-yellow" : "text-error"
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
            <table className="hidden md:table w-full">
              <thead className="border-b border-gray text-secondary">
                <tr>
                  <th className="px-2 py-4 text-left w-[33.3%]">Тип</th>
                  <th className="px-2 py-4 text-left w-[35.3%]">Даты отпуска</th>
                  <th className="px-2 py-4 text-right">Количество дней</th>
                </tr>
              </thead>
              <tbody>
                {vacationHistory.map((item, index) => (
                  <tr key={item.id} className={index !== vacationHistory.length - 1 ? "border-b border-gray" : ""}>
                    <td className="px-2 py-4 text-left text-base text-gray-800">{item.type}</td>
                    <td className="px-2 py-4 text-left text-base text-gray-800">
                      <div className="flex items-center space-x-3">
                        <div>{item.start}</div>
                        <ArrowRightIcon
                          className={`h-6 w-6 border-1 ${item.type === "Отпуск" ? "text-yellow" : "text-error"}`}
                        />
                        <div>{item.finish}</div>
                      </div>
                    </td>
                    <td className="px-2 py-4 text-right text-base text-gray-800">{item.daysNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}