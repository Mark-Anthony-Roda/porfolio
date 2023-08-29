import { HeroBannerProps } from "@/app/interfaces"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function HeroBanner(props: HeroBannerProps) {
  const {
    className = "w-full object-cover",
    imageSrc,
    imageAlt = "hero banner image",
    showPages = [
      "/about-us",
      "/attorneys",
      "/our-services",
      "/news",
      "/contact-us",
    ],
    texts = {
      page: "",
      title: "",
    },
  } = props

  const pathname = usePathname()

  return showPages.includes(pathname) ? (
    <section className="relative">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1440}
        height={745}
        className={className}
      />

      <div className="container mx-auto h-full min-h-[320px] w-full relative flex flex-col items-end justify-end py-[65px] px-[30px] text-end">
        <h5 className="text-[#DC9E00] text-[20px] leading-normal tradcking-[3px]">
          {texts.page}
        </h5>
        <h2 className="text-[#DC9E00] text-[45px] font-medium leading-normal tracking-[6.75px]">
          {texts.title}
        </h2>
      </div>
    </section>
  ) : (
    <></>
  )
}
