import { ArticleCardProps } from "@/app/interfaces"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"

export default function ArticleCard(props: ArticleCardProps) {
  const dataToRender = {
    ...props,
    imageAlt: props.imageAlt ? props.imageAlt : "thumbnail",
    wrapperClassName:
      props.wrapperClassName && props.wrapperClassName !== ""
        ? props.wrapperClassName
        : "w-full",
    imageClassName:
      props.imageClassName && props.imageClassName !== ""
        ? props.imageClassName
        : "w-full object-cover",
    dateClassName:
      props.dateClassName && props.dateClassName !== ""
        ? props.dateClassName
        : "mt-[10px] text-[14px] leading-[21px] tracking-[0.42px]",
    date: props.date
      ? moment(props.date, "MMMM D, YYYY").format("MMMM D, YYYY")
      : moment().format("MMMM D, YYYY"),
    descriptionClassName:
      props.descriptionClassName && props.descriptionClassName !== ""
        ? props.descriptionClassName
        : "mt-[1px] text-[20px] leading-[30px] tracking-[0.6px] line-clamp-3 text-[#DC9E00]",
  }

  return (
    <div className={dataToRender.wrapperClassName}>
      {dataToRender.src && (
        <Image
          className={dataToRender.imageClassName}
          src={dataToRender.src}
          alt={dataToRender.imageAlt}
          width={100}
          height={100}
        />
      )}
      {dataToRender.date && (
        <p className={dataToRender.dateClassName}>{dataToRender.date}</p>
      )}
      {dataToRender.href && !dataToRender.hrefLabel ? (
        <Link
          href={dataToRender.href}
          className={dataToRender.descriptionClassName}
        >
          {dataToRender.description}
        </Link>
      ) : (
        <p className={dataToRender.descriptionClassName}>
          {dataToRender.description}
        </p>
      )}
    </div>
  )
}
