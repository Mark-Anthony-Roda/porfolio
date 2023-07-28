import { DropdownProps, MenuItemProps, MenuProps } from "@/app/interfaces"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import ChildMenu from "./ChildMenu/ChildMenu"
import Button from "../Button/Button"

const COLLAPSECLASS: DropdownProps = {
  hover: () => {
    return "dropdown-menu"
  },
  click: (clicked?: boolean) => {
    if (clicked) return "dropdown-menu-clicked"
    return "dropdown-menu-click"
  },
}
export default function Menu(props: MenuProps) {
  const {
    activeKey,
    items,
    className,
    childClassName,
    collapsePosition,
    collapseAction = "hover",
  } = props

  const pathname = usePathname()

  const pathKey = items.find(
    (item: MenuItemProps) => item.url === pathname
  )?.key
  const [active, setActive] = useState<string | number>(
    pathKey ?? activeKey ?? items[0].key
  )

  const renderItemHandler = (element: MenuItemProps) => {
    switch (element.type.toLowerCase()) {
      case "link":
        return (
          <Link href={element.url}>
            <span>{element.label}</span>
          </Link>
        )

      case "button":
        return (
          <Button
            label={element.label}
            onClick={() => COLLAPSECLASS[collapseAction](true)}
          />
        )

      default:
        break
    }
  }

  return (
    <div className={className ?? "flex gap-3 text-white"}>
      {items.map((item: MenuItemProps, index) => {
        return (
          <div
            key={index}
            className={`relative dropdown ${
              item.className ??
              "hover:opacity-80 hover:underline hover:underline-offset-8 cursor-pointer"
            } ${
              active === item.key
                ? "opacity-80 underline underline-offset-8"
                : ""
            }`}
            onClick={() => setActive(item.key)}
          >
            <Link href={item.url}>
              <span>{item.label}</span>
            </Link>
            {/* <Link
              href={item.url}
              // className={`${
              //   item.className ??
              //   "hover:opacity-80 hover:underline hover:underline-offset-8 cursor-pointer"
              // }`}
            >
              <span>{item.label}</span>
            </Link> */}
            {item.children ? (
              <ChildMenu
                items={item.children}
                className={childClassName ?? ""}
                collapsePosition={collapsePosition}
                collapseAction={collapseAction}
              />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
