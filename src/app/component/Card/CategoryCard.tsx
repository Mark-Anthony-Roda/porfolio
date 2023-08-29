import { CategoryCardProps } from "@/app/interfaces"
import Link from "next/link"

export default function CategoryCard(props: CategoryCardProps) {
  const {
    title,
    icon,
    description,
    href,
    hrefLabel = "LEARN MORE",
    hrefTarget = "_self",
    iconPlacement = "left",
    titleClassName = "text-[30px] text-[#DC9E00] leading-normal tracking-[4.5px] my-[20px]",
    descriptionClassName = "text-[#555] text-[16px] font-light leading-[23px] tracking-[0.32px] text-justify",
    hrefClassName = "text-[#DC9E00] mt-[20px] text-[16px] leading-normal tracking-[2.4px] w-fit",
    wrapperClassName
  } = props

  const iconPosition = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }

  return (
    <div className={wrapperClassName ?? ""}>
      {icon && (
        <span className={`flex ${iconPosition[iconPlacement]}`}>{icon}</span>
      )}
      <h2 className={titleClassName}>{title}</h2>
      {description &&
        (typeof description === "string" ? (
          <p className={descriptionClassName}>{description}</p>
        ) : (
          <div>{description}</div>
        ))}
      {href && (
        <div className={hrefClassName}>
          <Link href={href} target={hrefTarget}>
            {hrefLabel}
          </Link>
        </div>
      )}
    </div>
  )
}
