"use client"

import Image from "next/image"
import { HeaderMenu } from "@/app/utils"
// import { Button } from "../Buttons"
import { Button, Menu } from ".."

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
          wrapperClassName="flex gap-[4.5rem] text-white items-center w-full justify-center"
          // menuClassName="py-2 px-4 nav-link active:active"
          // childClassName="nav-link active:active"
          collapseAction="hover"
          items={HeaderMenu}
        />

        <Button
          label="LOGIN"
          // type="link"
          className="outline outline-1 text-white px-[30px] outline-white font-bold hover:text-black hover:bg-white cursor-pointer"
          // icon={<HiUser />}
          iconPlacement="left"
        />
      </div>
    </div>
  )
}
