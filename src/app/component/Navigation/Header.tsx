"use client"

import { HeaderMenu } from "@/app/utils/Menu"
import { Logo } from "@/app/component/Icon"
import { useEffect, useState } from "react"
import "@/app/component/Navigation/Navigation.css"
import { usePathname } from "next/navigation"
import { Menu, MenuCard } from "@/app/component/Navigation"
import Burger from "@/app/component/Burger/Burger"

export default function Header() {
  const [menuCardOpen, setMenuCardOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="sticky z-50 top-0">
      <div
        className={` ${
          pathname !== "/"
            ? "bg-[#353535] border-b-[10px] border-[#DC9E00]"
            : scrolled
            ? "bg-[#353535] border-b-[10px] border-[#DC9E00]"
            : "bg-transparent"
        } flex absolute z-20 left-0 right-0 items-center justify-center lg:justify-between text-white`}
      >
        <div className="flex h-[67px] justify-center lg:justify-between items-center container mx-auto px-4">
          <Logo />
          <Menu
            className={`hidden lg:flex text-[14px] leading-normal tracking-[1.4px] uppercase items-center gap-4`}
            items={HeaderMenu}
          />
          <MenuCard
            items={HeaderMenu}
            className={`fixed bottom-[15%] mx-[30px] py-[30px] rounded-lg bg-white text-[#555] shadow-md w-10/12 z-20 ${
              menuCardOpen
                ? "animate visible lg:invisible opacity-100 lg:opacity-0 translate-y-[0]"
                : "animate invisible lg:invisible opacity-0 translate-y-[100px] "
            }`}
            onClick={() => setMenuCardOpen(!menuCardOpen)}
          />
        </div>
      </div>
      <Burger
        className="bg-[#DC9E00] px-3 py-4 rounded-full fixed bottom-[5%] right-5 items-center float-right ml-[20px] ms-[20px] mt-[17px] flex lg:hidden z-50"
        onClick={() => setMenuCardOpen(!menuCardOpen)}
        active={menuCardOpen}
      />
    </section>
  )
}
