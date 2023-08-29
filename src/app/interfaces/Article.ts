export interface ArticleCardProps {
  src?: string
  date?: string | Date
  href?: string
  description: string
  hrefLabel?: string
  imageAlt?: string
  wrapperClassName?: string
  imageClassName?: string
  dateClassName?: string
  descriptionClassName?: string
}

export interface ArticleListProps {
  title?: string
  titlePosition?: "left" | "center" | "right"
  items: ArticleCardProps[]
  wrapperClassName?: string
}

