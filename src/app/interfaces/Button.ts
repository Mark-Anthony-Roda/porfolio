import { ReactNode } from "react"

export interface ButtonProps {
  label: string | ReactNode
  onClick?: Function
  size?: string
  shape?: "default" | "circle" | "round"
  icon?: ReactNode
  href?: string
  className?: string
}
