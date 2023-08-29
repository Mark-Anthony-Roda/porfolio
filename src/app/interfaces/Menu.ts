import { MouseEventHandler, ReactNode } from "react"

export interface MenuListProps {
  key?: string | number
  label: string | ReactNode
  url: string
  type: "link" | "button"
  icon?: ReactNode
  target?: "_blank" | "_self" | "_parent" | "_top" | "framename"
  className?: string
  onClick?:
    | MouseEventHandler<
        HTMLButtonElement | HTMLAnchorElement | HTMLDivElement | MouseEvent
      >
    | Function
  menuType?: "main" | "external" | "form"
  mobileLabel?: string | ReactNode
  activeClassName?: string
}

export interface MenuProps {
  items: MenuListProps[]
  className?: string
  onClick?:
    | MouseEventHandler<
        HTMLButtonElement | HTMLAnchorElement | HTMLDivElement | MouseEvent
      >
    | Function
  defaultActive?: string
  fromQueryString?: string
}

export interface FooterContentProps {
  contents: FooterMenuProps[]
  className?: string
}

export interface FooterMenuProps {
  label?: string | ReactNode
  url?: string
  className?: string
  children?: FooterContentProps
  hrefTaget?: "_blank" | "_self" | "_parent" | "_top" | "framename"
}

export interface FooterProps {
  items: FooterContentProps[]
  wrapperClassName?: string
  containerClassName?: string
}
