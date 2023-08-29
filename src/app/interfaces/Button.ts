import { ButtonHTMLAttributes, ReactNode } from "react"

export interface ButtonProps {
  buttonAttributes?: ButtonHTMLAttributes<HTMLButtonElement>
  label: string | ReactNode
}
