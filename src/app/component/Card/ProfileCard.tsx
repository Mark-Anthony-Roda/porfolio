import { ProfileCardProps } from "@/app/interfaces"
import Image from "next/image"
import Link from "next/link"

export default function ProfileCard(props: ProfileCardProps) {
  const {
    image,
    name,
    position,
    description,
    actionButton,
    nameClassName = "text-[30px] font-bold leading-normal tracking-[4.5px] mb-[10px]",
    positionClassName = "text-[20px] font-medium leading-normal tracking-[3px] mb-[20px] xl:whitespace-nowrap",
    descriptionClassName = "text-[#555] text-[16px] font-light leading-[23px] tracking-[0.32px] mb-[15px]",
    wrapperClassName = "flex cursor-default flex-wrap xl:flex-nowrap w-full grayscale-0 lg:grayscale hover:grayscale-0 lg:border-l-8 lg:border-transparent lg:hover:border-[#DC9E00] hover:text-[#DC9E00]",
  } = props

  return (
    <div className={wrapperClassName}>
      {image && (
        <div className="w-full xl:w-1/2 lg:mr-[20px]">
          <Image
            src={image}
            alt="profile image"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
      )}
      <div className="w-full mt-[10px] sm:mt-0 md:w-full xl:w-1/2 flex flex-col">
        <h2 className={nameClassName}>{name}</h2>
        {position && <h4 className={positionClassName}>{position}</h4>}
        {description && <p className={descriptionClassName}>{description}</p>}
        {actionButton && (
          <Link
            href={actionButton.href}
            className={`flex gap-[20px] ${
              actionButton.className ??
              "text-[20px] leading-normal tracking-[2px] mt-auto"
            }`}
          >
            <span>{actionButton.label}</span>
            {actionButton.icon && actionButton.icon}
          </Link>
        )}
      </div>
    </div>
  )
}
