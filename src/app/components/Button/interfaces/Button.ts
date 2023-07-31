import { MouseEventHandler, ReactNode } from "react"

export interface ButtonProps {
  label: string | ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  size?: string
  shape?: "default" | "circle" | "round"
  icon?: ReactNode
  href?: string
  className?: string
  iconPlacement?: "left" | "right" | "top" | "bottom"
  type?: "button" | "link"
  description?: string
}
