import { ReactNode } from "react"

export interface TestimonialProps {
  title?: string | ReactNode
  titlePosition?: "center" | "right" | "left"
  wrapperClassName?: string
}

export interface TestimonialCardProps {
  author: string | ReactNode
  description: string | ReactNode
  authorPosition?: string
  authorLogoSrc?: string
  wrapperClassName?: string
  descriptionClassName?: string
  quoteClassName?: string
  signatureClassName?: string
  authorClassName?: string
  authorPositionClassName?: string
  authorLogoClassName?: string
  index?: number
  containerClassName?: string
}
