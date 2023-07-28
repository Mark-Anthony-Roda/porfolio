"use client"

import Image from "next/image"
import Menu from "../Menu/Menu"
import Button from "../Button/Button"
import { HeaderMenu } from "@/app/utils"

export default function Header() {
  return (
    <div className="bg-transparent py-2.5 min-h-[74px]">
      <div className="max-w-[85%] w-full flex justify-between m-auto">
        <a href="/about-us" className="cursor-pointer">
          <Image
            src={"/img/logo.png"}
            alt=""
            width={310}
            height={310}
            priority
          />
        </a>
        <Menu
          className="flex gap-20 text-white items-center w-full justify-center"
          // childClassName="bg-white text-black"
          collapseAction="hover"
          items={HeaderMenu}
        />

        <Button
          label="LOGIN"
          className="outline outline-1 text-white px-[30px] outline-white font-bold hover:text-black hover:bg-white"
        />
      </div>
    </div>
  )
}
