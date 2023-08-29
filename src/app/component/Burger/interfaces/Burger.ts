import { MouseEventHandler } from "react"

export interface BurgerProps {
  onClick?:
    | MouseEventHandler<
        HTMLButtonElement | HTMLAnchorElement | HTMLDivElement | MouseEvent
      >
    | Function
  className?: string
  active?: boolean
}
