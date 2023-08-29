import { ContentBlockProps } from "@/app/interfaces"
import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"

export default function ContentBlock(props: ContentBlockProps) {
  const {
    wrapperClassName = "flex w-full",
    titleClassName = "text-[#555] text-[40px] font-medium leading-normal tracking-[6px]",
    descriptionClassName,
    textWrapperClassName = "p-[105px]",
    imageClassName = "w-1/2",
    image = "/img/block/content-block/law-books.jpg",
    imageAlt = "Image",
    title,
    description,
    href,
    hrefTarget = "_self",
    buttonClassName = "mt-[20px]",
    buttonLabel,
    imagePosition = "left",
    buttonPlacement = "left",
  } = props

  const buttonPosition = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }

  const overlapClass = {
    "overlap-right": "lg:rounded-lg lg:-mr-[50px] lg:my-[30px]",
    "overlap-left": "lg:rounded-lg lg:-ml-[50px] lg:my-[30px]",
    right: "",
    left: "",
  }

  const getTextContent = () => {
    return (
      <div
        className={`${textWrapperClassName ?? ""} z-20 ${
          overlapClass[imagePosition]
        }`}
      >
        <h2 className={titleClassName}>{title}</h2>
        {typeof description === "string" ? (
          <p className={descriptionClassName}>{description}</p>
        ) : (
          description
        )}

        {buttonLabel && (
          <div className={`flex ${buttonPosition[buttonPlacement]}`}>
            <Link
              href={href ?? "#"}
              target={hrefTarget}
              className={buttonClassName}
            >
              {buttonLabel}
            </Link>
          </div>
        )}
      </div>
    )
  }

  const positions = {
    left: (
      <div className={`flex flex-col w-full lg:flex-row relative`}>
        <Image
          src={image}
          alt={imageAlt}
          width={720}
          height={480}
          className={imageClassName}
        />
        {getTextContent()}
      </div>
    ),
    right: (
      <div className={`flex flex-col w-full lg:flex-row`}>
        {getTextContent()}
        <Image
          src={image}
          alt={imageAlt}
          width={720}
          height={480}
          className={imageClassName}
        />
      </div>
    ),
    "overlap-right": (
      <div className={`flex flex-col w-full lg:flex-row`}>
        {getTextContent()}
        <Image
          src={image}
          alt={imageAlt}
          width={720}
          height={480}
          className={`${imageClassName} lg:rounded-lg`}
        />
      </div>
    ),
    "overlap-left": (
      <div className={`flex flex-col w-full lg:flex-row`}>
        <Image
          src={image}
          alt={imageAlt}
          width={720}
          height={480}
          className={`${imageClassName} lg:rounded-lg`}
        />
        {getTextContent()}
      </div>
    ),
  }

  return (
    <section className={`${wrapperClassName}`}>
      {positions[imagePosition]}
    </section>
  )
}
