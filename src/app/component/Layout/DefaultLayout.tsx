"use client"

import { HeroBannerTextProps } from "@/app/interfaces"
import { PageHeroBannerText } from "@/app/utils/Banner"
import { usePathname } from "next/navigation"
import { Fragment, ReactNode, useEffect, useState } from "react"
import { FooterMenu } from "@/app/utils/Menu"
import { Copyright, Footer, Header } from "@/app/component/Navigation"
import { HeroBanner } from "@/app/component/Banner"

export default function DefaultLayout(props: {
  bannerTexts?: HeroBannerTextProps[]
  children: ReactNode
}) {
  const { children, bannerTexts = PageHeroBannerText } = props
  const pathname = usePathname()

  const [heroBannerTexts, setHeroBannerTexts] = useState<HeroBannerTextProps>({
    page: "",
    title: "",
  })

  useEffect(() => {
    const bannerText = bannerTexts.find((item) => item.url === pathname)
    if (bannerText) setHeroBannerTexts(bannerText)
  }, [pathname, PageHeroBannerText, bannerTexts])

  return (
    <Fragment>
      <Header />

      <HeroBanner
        imageSrc="/img/banner/Hero Banner 2.jpg"
        imageAlt="law books"
        className="mt-[97px] w-full absolute h-full object-cover object-left bottom-0"
        texts={heroBannerTexts}
      />
      {children}
      <Footer
        items={FooterMenu}
        wrapperClassName="p-[30px] w-full container mx-auto"
      />
      <Copyright
        label="Website powered by HASP"
        className="w-full py-[20px] flex justify-center bg-[#272727] text-white text-[12px] leading-[23px] tracking-[2.4px]"
      />
    </Fragment>
  )
}
