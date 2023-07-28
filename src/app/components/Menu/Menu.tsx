import { DropdownProps, MenuItemProps, MenuProps } from "@/app/interfaces"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import ChildMenu from "./ChildMenu/ChildMenu"
import { Button } from "../Buttons"

const COLLAPSECLASS: DropdownProps = {
  hover: {
    active: "dropdown-menu",
    inactive: "dropdown-menu",
  },
  click: { active: "dropdown-menu-clicked", inactive: "dropdown-menu-click" },
}

export default function Menu(props: MenuProps) {
  const {
    activeKey,
    items,
    wrapperClassName,
    menuClassName,
    childClassName,
    collapsePosition,
    collapseAction = "hover",
  } = props

  const pathname = usePathname()

  const [collapsedMenu, setCollapsedMenu] = useState<
    string | number | undefined
  >()

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
          <>
            {element.icon}
            <Link href={element.url}>
              <span>{element.label}</span>
            </Link>
          </>
        )

      case "button":
        return (
          <Button
            label={element.label}
            onClick={() => {
              if (collapsedMenu === element.key) {
                setCollapsedMenu(undefined)

                return
              }

              setCollapsedMenu(element.key)
            }}
          />
        )

      default:
        break
    }
  }

  return (
    <div className={wrapperClassName ?? "flex gap-3 text-white"}>
      {items.map((item: MenuItemProps, index) => {
        const useClassname = menuClassName ?? item.className ?? null
        const activeClass = useClassname?.replaceAll("hover:", "")

        return (
          <div
            key={index}
            className={`relative dropdown ${
              menuClassName ??
              item.className ??
              "hover:opacity-80 hover:underline hover:underline-offset-8 cursor-pointer"
            } ${
              active === item.key
                ? activeClass ?? "opacity-80 underline underline-offset-8"
                : ""
            }`}
            onClick={() => setActive(item.key)}
          >
            {renderItemHandler(item)}

            {item.children ? (
              <ChildMenu
                activeParent={collapsedMenu}
                parentKey={item.key}
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
