import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Avatar from "@/public/assets/img/avatar.png";
import Logo from "@/public/assets/img/Logo.png";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-4 py-6 mb-1">
      <Image src={Logo} alt="Logo" className="md:w-[180px] md:h-[40px] w-[135px] h-[30px]" />
      <div className="flex justify-between items-center gap-x-2">
        <button className="bg-accent text-primary text-sm font-semibold py-2 px-4 rounded-md hidden  md:flex ">
          СОЗДАТЬ СЧЕТ
        </button>
        <button className="bg-accent text-primary text-sm font-semibold py-2 px-4 rounded-md hidden  md:flex ">
          КОРЗИНА
        </button>
        <div className="flex justify-center border border-gray rounded-full px-4 py-2">
          <Image
            src={Avatar}
            alt="avatar"
            width={24}
            height={24}
          />
          <button className="flex justify-center items-center size-6">
            <ChevronDownIcon className="size-6 border-1 text-primary" />
          </button>
        </div>
        <div className="mx-2">
          <button className="flex justify-center items-center size-6">
            <Bars3Icon className="size-6 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
}