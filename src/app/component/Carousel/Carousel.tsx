import "@/app/component/Carousel/Carousel.css"
import {  CarouselProps } from "@/app/interfaces"
import { Fragment, useState } from "react"
import { KeyBoardArrowLeft } from "../Icon"

export default function Carousel(props: CarouselProps) {
  const { contents, renderContent } = props

  const [carouselItems, setCarouselItems] = useState<Object[]>(contents)

  return (
    <Fragment>
      <div className="overflow-hidden relative text-black w-full md:w-[150%]">
        <div className="flex gap-[20px]">
          {carouselItems &&
            carouselItems.map((item: Object, index: number) => {
              if (renderContent)
                return (
                  <Fragment key={index}>{renderContent(item, index)}</Fragment>
                )
              else return <div key={index}></div>
            })}
        </div>
      </div>

      <div className="flex justify-end gap-2 text-[#DC9E00] mt-[50px]">
        <KeyBoardArrowLeft />

        <KeyBoardArrowLeft
          className="transform rotate-180 cursor-pointer"
          // onClick={() => swipeHandler("next")}
        />
      </div>
    </Fragment>
  )
}
