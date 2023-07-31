import "@/app/components/Menu/ChildMenu/ChildMenu.css"

import { Button } from "../.."
import { shallow } from "zustand/shallow"
import {
  ChildMenuProps,
  DropdownProps,
  MenuItemProps,
  MenuToggleStateProps,
} from "../interfaces/Menu"
import { useMenuToggle } from "../store/menuToggle"

const COLLAPSECLASS: DropdownProps = {
  hover: {
    active: "dropdown-menu",
    inactive: "dropdown-menu",
  },
  click: { active: "dropdown-menu-clicked", inactive: "dropdown-menu-click" },
}

const childPosition = {
  left: "left-full",
  right: "right-full",
}

export default function ChildMenu(props: ChildMenuProps) {
  const {
    parentKey,
    items,
    className = "hover:opacity-80 hover:underline hover:underline-offset-8 cursor-pointer",
    collapsePosition = "left",
    collapseAction = "hover",
    activeParent,
  } = props

  const [activeMenus, setActiveMenus] = useMenuToggle(
    (state: MenuToggleStateProps) => [state.activeKeys, state.setState],
    shallow
  )

  const active = activeMenus.find((key) => key === parentKey)

  const defaultClass: string[] = []

  const hoverClass: string[] = []

  if (className) {
    className.split(" ").map((item) => {
      if (item.includes("hover:")) {
        hoverClass.push(item)
      } else {
        defaultClass.push(item)
      }
    })
  }

  return (
    <div
      className={`${
        active
          ? COLLAPSECLASS[collapseAction].active
          : COLLAPSECLASS[collapseAction].inactive
      } absolute top-[130%] bg-white text-black p-4`}
    >
      {items.map((elem: MenuItemProps, index: number) => {
        return (
          <div className={`dropdown relative ${className}`} key={index}>
            <Button
              type={elem.type}
              label={elem.label}
              icon={elem.icon}
              iconPlacement={elem.iconPlacement}
              href={elem.url}
              onClick={() => {
                setActiveMenus(elem.key, true)
              }}
              description={elem.description}
              className={className + ' py-4'}
            />
            {/* <Link href={elem.url}>
              <span>{elem.label}</span>
            </Link> */}
            {elem.children ? (
              <ChildMenu
                parentKey={elem.key}
                activeParent={active}
                items={elem.children}
                className={`${childPosition[collapsePosition]} ${
                  className ?? ""
                }`}
                collapseAction={collapseAction}
                collapsePosition={collapsePosition}
              />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
