import { ReactNode } from "react"
import { TestimonialCardProps } from "."

export interface CarouselContentProps {
  title: string
  image: ReactNode
}

export interface CarouselProps {
  contents: Object[]
  renderContent?: (item: any, index?: number) => ReactNode
}
