import { TestimonialProps } from "@/app/interfaces"
import { TestimonialList } from "@/app/utils/Testimonial"
import { Divider } from "@/app/component/Separators"
import { Carousel } from "@/app/component/Carousel"
import { TestimonialCard } from "@/app/component/Testimonial"

export default function Testimonial(props: TestimonialProps) {
  const {
    title,
    wrapperClassName = "px-[148px] py-[100px]",
    titlePosition = "left",
  } = props

  return (
    <section className={`overflow-hidden ${wrapperClassName ?? ""}`}>
      <div className="container mx-auto">
        <Divider
          label={title}
          labelPosition={titlePosition}
          labelClassName="text-[#555555] text-[40px] font-medium leading-normal tracking-[6px]"
          borderClassName="border-[#555]"
          wrapperClassName="mb-[80px]"
        />

        <Carousel
          contents={TestimonialList}
          renderContent={(item, index) => (
            <TestimonialCard {...item} index={index} />
          )}
        />
      </div>
    </section>
  )
}
