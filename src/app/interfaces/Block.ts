import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { ReactNode } from "react"

export interface ContentBlockProps {
  title: string | ReactNode
  wrapperClassName?: string
  textWrapperClassName?: string
  titleClassName?: string
  imageClassName?: string
  descriptionClassName?: string
  image?: string | StaticImport
  imageAlt?: string
  description?: string | ReactNode
  href?: string
  hrefTarget?: "_blank" | "_self" | "_parent" | "_top" | "framename"
  imagePosition?: "right" | "left" | "overlap-right" | "overlap-left"
  buttonClassName?: string
  buttonLabel?: string | ReactNode
  buttonPlacement?: "right" | "center" | "left"
}
