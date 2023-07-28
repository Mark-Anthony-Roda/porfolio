import { ReactNode } from "react"

export interface MenuItemProps {
  label: string | ReactNode
  key: number | string
  url: string
  icon?: ReactNode
  disabled?: boolean
  children?: MenuItemProps[]
  className?: string
  type: "link" | "button"
}

export interface MenuProps {
  items: MenuItemProps[]
  childClassName?: string
  collapsePosition?: "left" | "right"
  className?: string
  activeKey?: string | number
  collapseAction?: "hover" | "click"
}

export interface ChildMenuProps {
  items: MenuItemProps[]
  className?: string
  collapsePosition?: "left" | "right"
  collapseAction?: "hover" | "click"
}

// export interface DropdownTypeProps {
//   dropdown: Function
// }

export interface DropdownProps {
  hover: Function
  click: Function
}
