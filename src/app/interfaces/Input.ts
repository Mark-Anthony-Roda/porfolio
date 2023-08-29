import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react"

export interface InputErrorProps {
  message: string
}
export interface TextProps {
  label?: string | ReactNode
  inputAttributes?: InputHTMLAttributes<HTMLInputElement>
  hasError?: InputErrorProps
}

export interface TextAreaProps {
  label?: string | ReactNode
  textAreaAttributes?: TextareaHTMLAttributes<HTMLTextAreaElement>
  hasError?: InputErrorProps
}
