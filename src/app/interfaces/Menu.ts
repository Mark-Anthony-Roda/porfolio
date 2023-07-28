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
  wrapperClassName?: string
  menuClassName?: string
  activeKey?: string | number
  collapseAction?: "hover" | "click"
}

export interface ChildMenuProps {
  items: MenuItemProps[]
  parentKey: string | number
  activeParent?: string | number
  className?: string
  collapsePosition?: "left" | "right"
  collapseAction?: "hover" | "click"
}

export interface DropdownTypeProps {
  active: string
  inactive: string
}

export interface DropdownProps {
  hover: DropdownTypeProps
  click: DropdownTypeProps
}
