import { MouseEventHandler } from "react"

export interface IconProps {
  className?: string
  width?: string | number
  height?: string | number
  stroke?: string
  onClick?: MouseEventHandler<SVGSVGElement>
}
