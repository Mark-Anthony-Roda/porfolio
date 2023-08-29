export interface HeroBannerTextProps {
  url?: string
  page?: string
  title?: string
}

export interface HeroBannerProps {
  className?: string
  imageSrc: string
  imageAlt?: string
  showPages?: string[]
  texts?: HeroBannerTextProps
}
