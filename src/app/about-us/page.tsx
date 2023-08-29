import { CategoryCard, ProfileCard } from "@/app/component/Card"
import CardList from "@/app/component/Card/CardList"

import { OurPrinciples } from "@/app/utils/Category"
import { TestimonialCard } from "@/app/component/Testimonial"
import { ContentBlock } from "@/app/component/Block"
import { ProfileList } from "../utils/Profile"

export default function AboutUs() {
  return (
    <section>
      <TestimonialCard
        wrapperClassName="px-[30px] py-[50px] xl:px-[250px] container mx-auto text-center text-[#555] text-[22px] leading-[32px] tracking-[0.44px]"
        author={<p className="italic font-light">- Aristotle</p>}
        description="At his best, man is the noblest of all animals; separated from law and justice he is the worst."
        containerClassName="bg-[#EFEFEF] w-full"
      />

      <CardList
        title="OUR PRINCIPLES"
        wrapperClassName="py-[70px] px-[30px] container mx-auto"
        items={OurPrinciples}
        itemsWrapperClassName="mt-[80px] grid grid-cols-1 lg:grid-cols-3 text-[#555] gap-x-5 gap-y-[65px]"
        render={(item) => <CategoryCard {...item} />}
      />

      <ContentBlock
        title="MAKING A START"
        titleClassName="text-[#555] text-[40px] font-medium leading-normal tracking-[6px]"
        textWrapperClassName="flex flex-col justify-center py-[30px] lg:pl-[40px] w-full lg:w-1/2"
        description={
          <div className="flex flex-col text-[#555] text-justify gap-[30px]">
            <p className="mt-[20px] text-[16px] font-light leading-[23px] tracking-[0.32px]">
              This is fill in text. It is here temporarily, and will be replaced
              with the proper text shortly. It is repeated many times so we will
              see what the website will look like with text.
            </p>
            <p className="text-[16px] font-light leading-[23px] tracking-[0.32px]">
              This is fill in text. It is here temporarily, and will be replaced
              with the proper text shortly.
            </p>
          </div>
        }
        image="/img/block/content-block/Person-writing.jpg"
        imageAlt="Person writing"
        wrapperClassName="flex w-full justify-center px-[30px] container mx-auto"
        imageClassName="h-auto w-full lg:w-1/2"
      />

      <CardList
        title="OUR ATTORNEYS"
        wrapperClassName="py-[70px] px-[30px] container mx-auto"
        items={ProfileList}
        itemsWrapperClassName="mt-[80px] grid grid-cols-1 md:grid-cols-2 text-[#555] gap-x-5 gap-y-[65px]"
        render={(item) => <ProfileCard {...item} />}
      />
    </section>
  )
}
