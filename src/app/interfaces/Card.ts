import { ReactNode } from "react"
import { AnchorProps } from "."

export interface InforCardProps {
  wrapperClassName?: string
  titleClassName?: string
  descriptionClassName?: string
  title?: string
  description: string | ReactNode
}

export interface CategoryCardProps {
  title: string | ReactNode
  icon?: ReactNode
  description?: string | ReactNode
  href?: string
  hrefTarget?: "_blank" | "_self" | "_parent" | "_top" | "framename"
  hrefLabel?: string | ReactNode
  titleClassName?: string
  iconPlacement?: "left" | "center" | "right"
  descriptionClassName?: string
  hrefClassName?: string
  wrapperClassName?: string
}

export interface CardListProps {
  title?: string | ReactNode
  titlePosition?: "left" | "center" | "right"
  wrapperClassName?: string
  items: CategoryCardProps[] | ProfileCardProps[]
  itemsWrapperClassName?: string
  render: (item: any, index?: number) => ReactNode
}

export interface ProfileCardProps {
  image?: string
  name: string
  position?: string
  description?: string
  actionButton?: AnchorProps
  nameClassName?: string
  positionClassName?: string
  descriptionClassName?: string
  wrapperClassName?: string
}
