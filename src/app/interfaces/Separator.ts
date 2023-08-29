import { ReactNode } from "react"

export interface DividerProps {
  label?: string | ReactNode
  labelPosition?: "center" | "right" | "left"
  borderClassName?: string
  labelClassName?: string
  wrapperClassName?: string
}
