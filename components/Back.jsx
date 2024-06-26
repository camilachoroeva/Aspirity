import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function Back() {
  return (
    <div className="flex items-center gap-2 my-6 cursor-pointer max-w-[272px] text-tetriary">
      <ChevronLeftIcon className="size-5" />
      <button className="text-sm font-semibold">
        ВЕРНУТЬСЯ К СОТРУДНИКАМ
      </button>
    </div>
  );
}
