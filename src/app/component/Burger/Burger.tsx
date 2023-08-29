"use client"

import { useState } from "react"
import { BurgerProps } from "./interfaces/Burger"
import "../Burger/Burger.css"

export default function Burger(props: BurgerProps) {
  const {
    onClick,
    className = "float-right ml-[20px] ms-[20px] mt-[17px] flex lg:hidden",
    active: externalActiveIndication,
  } = props

  const [active, setActive] = useState<boolean>(false)

  const menuOpen =
    externalActiveIndication !== undefined
      ? externalActiveIndication
        ? "rotate-[-45deg]"
        : ""
      : active
      ? "rotate-[-45deg]"
      : ""

  return (
    <div
      className={className}
      onClick={(event) => {
        if (onClick) onClick(event)
        setActive(!active)
      }}
    >
      <div
        className={`relative w-[25px] h-[17px] cursor-pointer duration-[.5s] ${
          menuOpen ? "rotate-[-45deg]" : ""
        }`}
      >
        <span
          className={`block absolute left-0 w-full h-[2px] bg-white duration-[.5s] ${
            menuOpen ? "active-first-child rotate-[-95deg]" : "top-0"
          }`}
        ></span>
        <span
          className={`top-1/2 block absolute left-0 w-full h-[2px] bg-white duration-[.5s] ${
            menuOpen ? "scale-x-[.2] opacity-0" : ""
          }`}
        ></span>
        <span
          className={`-mt-[1px] block absolute left-0 w-full h-[2px] bg-white duration-[.5s] ${
            menuOpen ? "top-1/2" : "top-full"
          }`}
        ></span>
      </div>
    </div>
  )
}
