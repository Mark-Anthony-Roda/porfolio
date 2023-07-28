import "@/app/components/Menu/ChildMenu/ChildMenu.css"
import { ChildMenuProps, DropdownProps, MenuItemProps } from "@/app/interfaces"
import Link from "next/link"
import Button from "../../Button/Button"

const COLLAPSECLASS: DropdownProps = {
  hover: () => {
    return "dropdown-menu"
  },
  click: (clicked?: boolean) => {
    if (clicked) return "dropdown-menu-clicked"
    return "dropdown-menu-click"
  },
}

const childPosition = {
  left: "left-full",
  right: "right-full",
}

export default function ChildMenu(props: ChildMenuProps) {
  const {
    items,
    className,
    collapsePosition = "left",
    collapseAction = "hover",
  } = props

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
    <div
      className={`${COLLAPSECLASS[
        collapseAction
      ]()} absolute top-[130%] bg-white text-black ${className ?? ""}`}
    >
      {items.map((elem: MenuItemProps, index: number) => {
        return (
          <div
            className={`dropdown relative p-3 ${
              elem.className ?? "hover:underline hover:underline-offset-8"
            }`}
            key={index}
          >
            {/* {renderItemHandler(elem)} */}
            <Link href={elem.url}>
              <span>{elem.label}</span>
            </Link>
            {elem.children ? (
              <ChildMenu
                items={elem.children}
                className={`${childPosition[collapsePosition]} ${
                  className ?? ""
                }`}
                collapsePosition={collapsePosition}
              />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
