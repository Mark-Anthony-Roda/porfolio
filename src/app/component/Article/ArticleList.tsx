import { ArticleListProps } from "@/app/interfaces"
import { Divider } from "@/app/component/Separators"
import { ArticleCard } from "@/app/component/Article"

export default function ArticleList(props: ArticleListProps) {
  const { title, titlePosition = "left", wrapperClassName, items } = props

  return (
    <section className={`${wrapperClassName ?? ""}`}>
      <Divider
        label={title}
        labelPosition={titlePosition}
        labelClassName="text-[#555555] text-[40px] font-medium leading-normal tracking-[6px]"
        borderClassName="border-[#555]"
        wrapperClassName="mb-[80px]"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full gap-[20px] text-[#555]">
        {items.map((item, index) => (
          <ArticleCard {...item} key={index} />
        ))}
      </div>
    </section>
  )
}
