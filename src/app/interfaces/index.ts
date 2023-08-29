import { ReactNode } from "react"

export * from "@/app/interfaces/Menu"
export * from "@/app/interfaces/Icon"
export * from "@/app/interfaces/Separator"
export * from "@/app/interfaces/Card"
export * from "@/app/interfaces/Block"
export * from "@/app/interfaces/Testimonial"
export * from "@/app/interfaces/Carousel"
export * from "@/app/interfaces/Article"
export * from "@/app/interfaces/Input"
export * from "@/app/interfaces/Button"
export * from "@/app/interfaces/Banner"

export interface CopyrightProps {
  label: string | ReactNode
  className?: string
}

export interface AnchorProps {
  href: string
  target?: "_blank" | "_self" | "_parent" | "_top" | "framename"
  label?: string | ReactNode
  className?: string
  icon?: ReactNode
  iconPlacement?: "left" | "center" | "right"
}
