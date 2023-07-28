"use client"

import Image from "next/image"
import Menu from "../Menu/Menu"
import { HeaderMenu } from "@/app/utils"
import { Button } from "../Buttons"
import { HiUser } from "react-icons/hi"

export default function Header() {
  return (
    <div className="bg-transparent py-2.5 min-h-[74px]">
      <div className="max-w-[85%] w-full flex justify-between m-auto">
        <a href="/" className="cursor-pointer">
          <Image
            src={"/img/logo.png"}
            alt=""
            width={310}
            height={310}
            priority
          />
        </a>
        <Menu
          wrapperClassName="flex gap-20 text-white items-center w-full justify-center"
          // menuClassName="py-2 px-4 hover:rounded-t hover:rounded-b-xl hover:bg-[#F04336]"
          childClassName="rounded-md"
          collapseAction="click"
          items={HeaderMenu}
        />

        <Button
          label="LOGIN"
          // type="link"
          className="outline outline-1 text-white px-[30px] outline-white font-bold hover:text-black hover:bg-white cursor-pointer"
          icon={<HiUser />}
          iconPlacement="left"
        />
      </div>
    </div>
  )
}
