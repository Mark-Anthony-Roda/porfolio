import { ButtonProps } from "@/app/interfaces"
import Link from "next/link"
import { Fragment } from "react"

export default function Button(props: ButtonProps) {
  const {
    label,
    className,
    onClick = () => {},
    icon = null,
    iconPlacement = "left",
    type = "button",
    href = "#",
  } = props

  const iconPlacementHandler = () => {
    switch (iconPlacement.toLowerCase()) {
      case "left":
      case "right":
        return "gap-3"

      default:
        return "flex-col justify-center py-3 gap-1"
    }
  }

  const buttonContent = () => {
    switch (iconPlacement.toLowerCase()) {
      case "left":
      case "top":
        return (
          <Fragment>
            {icon}
            <span>{label}</span>
          </Fragment>
        )

      default:
        return (
          <Fragment>
            <span>{label}</span>
            {icon}
          </Fragment>
        )
    }
  }

  const typeContent = () => {
    switch (type.toLowerCase()) {
      case "button":
        return (
          <button
            onClick={onClick}
            className={`flex ${iconPlacementHandler()} items-center `}
          >
            {buttonContent()}
          </button>
        )

      case "link":
        return (
          <Link
            href={href}
            className={`flex ${iconPlacementHandler()} items-center `}
          >
            {buttonContent()}
          </Link>
        )
      default:
        break
    }
  }

  return (
    <div className={`flex ${className ?? "px-4"}`}>
      {typeContent()}
    </div>
  )
}
