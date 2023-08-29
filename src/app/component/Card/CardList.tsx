import { CardListProps } from "@/app/interfaces"
import { Fragment } from "react"
import { Divider } from "@/app/component/Separators"

export default function CardList(props: CardListProps) {
  const {
    title,
    titlePosition = "left",
    items,
    wrapperClassName = "px-[148px] py-[100px]",
    itemsWrapperClassName = "mt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-x-5 gap-y-[65px]",
    render,
  } = props
  return (
    <section className={wrapperClassName}>
      <Divider
        label={title}
        labelPosition={titlePosition}
        labelClassName="text-[#555555] text-[40px] font-medium leading-normal tracking-[6px]"
        borderClassName="border-[#555]"
      />

      <div className={itemsWrapperClassName}>
        {items.map((item, index) => {
          return <Fragment key={index}>{render(item, index)}</Fragment>
        })}
      </div>
    </section>
  )
}
