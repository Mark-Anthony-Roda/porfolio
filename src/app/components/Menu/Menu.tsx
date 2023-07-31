import {
  DropdownProps,
  MenuItemProps,
  MenuProps,
  MenuToggleStateProps,
} from "@/app/interfaces"
import Link from "next/link"
import { redirect, usePathname } from "next/navigation"
import { useState } from "react"
import { Button, ChildMenu } from ".."
import { useMenuToggle } from "@/app/store/menuToggle"
import { shallow } from "zustand/shallow"

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

  const [activeMenus, setActiveMenus, clearActiveMenus] = useMenuToggle(
    (state: MenuToggleStateProps) => [
      state.activeKeys,
      state.setState,
      state.clearState,
    ],
    shallow
  )

  const pathname = usePathname()

  const pathKey = items.find(
    (item: MenuItemProps) => item.url === pathname
  )?.key
  const [active, setActive] = useState<string | number>(
    pathKey ?? activeKey ?? items[0].key
  )

  return (
    <div className={wrapperClassName ?? "flex gap-3 text-white"}>
      {items.map((item: MenuItemProps, index) => {
        let useClassname = menuClassName ?? item.className ?? null
        let activeClass: string[] | string | undefined = useClassname
          ?.split(" ")
          .filter((item) => item.includes("active:"))

        if (activeClass?.length) {
          activeClass = activeClass.join(" ").replaceAll("active:", "")
        } else {
          activeClass = useClassname
            ?.split(" ")
            .filter((item) => item.includes("hover:"))

          if (activeClass?.length) {
            activeClass = activeClass.join(" ").replaceAll("hover:", "")
          }
        }

        const defaultClass = useClassname
          ?.split(" ")
          .filter((item) => !item.includes("active:"))
          .join(" ")

        return (
          <div
            key={index}
            className={`relative dropdown ${
              defaultClass ??
              item.className ??
              "hover:opacity-80 hover:underline hover:underline-offset-8 cursor-pointer"
            } ${
              active === item.key
                ? activeClass ?? "opacity-80 underline underline-offset-8"
                : ""
            }`}
            onClick={() => setActive(item.key)}
          >
            <Button
              type={item.type}
              label={item.label}
              icon={item.icon}
              iconPlacement={item.iconPlacement}
              href={item.url}
              onClick={() => {
                setActiveMenus(item.key, true)
              }}
            />

            {item.children ? (
              <ChildMenu
                activeParent={active}
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
