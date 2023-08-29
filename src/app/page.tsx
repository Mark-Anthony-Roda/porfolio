import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"
import { ScrollDown } from "@/app/component/Icon"
import { OurServices } from "@/app/utils/Category"
import { ArticleListData } from "@/app/utils/Article"
import CardList from "@/app/component/Card/CardList"
import { CategoryCard, InfoCard } from "@/app/component/Card"
import { ContentBlock } from "@/app/component/Block"
import { Testimonial } from "@/app/component/Testimonial"
import { ArticleList } from "@/app/component/Article"
import { InputText, TextArea } from "@/app/component/Input"
import { Button } from "@/app/component/Button"

export default function Home() {
  return (
    <div>
      <section className="relative">
        <Image
          src="/img/banner/Hero Banner.jpg"
          alt="law weight scale"
          width={1440}
          height={745}
          className="w-full absolute h-full object-cover"
        />

        <div className="h-full min-h-[80vh] w-full relative container mx-auto flex flex-col items-center justify-end">
          <div className="text-white mb-[32px]">
            <h2 className="tracking-[9px] text-[45px] text-center uppercase px-6">
              Short Slide Caption goes here
            </h2>
          </div>
          <Link
            className="border border-white px-3 text-white text-[14px] leading-[50px] font-normal text-center tracking-[3.6px] uppercase mb-[79px] hover:border-[#DC9E00] hover:bg-[#DC9E00]"
            href="/"
          >
            BOOK A CONSULTATION
          </Link>

          <span className="text-center font-Inter text-white mb-[-65px] text-[14px] tracking-[1.4px]">
            scroll for more
          </span>
          <div className="text-white mb-[-55px] hover:cursor-pointer">
            <ScrollDown />
          </div>
        </div>
      </section>

      {/* Info Card */}
      <InfoCard
        wrapperClassName="bg-[#EFEFEF] text-[#555] px-[30px] py-[30px] sm:py-[50px] lg:py-[100px] w-full"
        titleClassName="text-[40px] font-medium leading-normal tracking-[6px] text-center container mx-auto"
        title="REVERIE & CO."
        description={
          <Fragment>
            <p className="text-justify lg:text-center text-[16px] font-light leading-[23px] tracking-[0.32px] mt-[50px] container mx-auto">
              This is fill in text. It is here temporarily, and will be replaced
              with the proper text shortly. It is repeated many times so we will
              see what the website will look like with text. This is fill in
              text. It is here temporarily, and will be replaced with the proper
              text shortly. It is repeated many times so we will see what the
              website will look like with text.
            </p>
            <p className="text-justify lg:text-center text-[16px] font-light leading-[23px] tracking-[0.32px] mt-6 container mx-auto">
              This is fill in text. It is here temporarily, and will be replaced
              with the proper text shortly.
            </p>
          </Fragment>
        }
      />

      {/* Content Block */}
      <ContentBlock
        title="ABOUT US"
        titleClassName="text-[#555] text-[40px] font-medium leading-normal tracking-[6px] mb-[20px] left-0 bottom-[50px]"
        textWrapperClassName="container mx-auto p-[30px] xl:p-[100px] text-justify w-full lg:w-1/2 bg-white"
        wrapperClassName="flex w-full shadow-lg justify-center"
        description={
          <Fragment>
            <p className="text-[#555] text-[16px] font-light leading-[23px] tracking-[0.32px]">
              This is fill in text. It is here temporarily, and will be replaced
              with the proper text shortly. It is repeated many times so we will
              see what the website will look like with text. This is fill in
              text. It is here temporarily, and will be replaced with the proper
              text shortly. It is repeated many times so we will see what the
              website will look like with text.
            </p>
            <p className="mt-6 text-[#555] text-[16px] font-light leading-[23px] tracking-[0.32px]">
              This is fill in text. It is here temporarily, and will be replaced
              with the proper text shortly.
            </p>
          </Fragment>
        }
        buttonLabel="LEARN MORE"
        buttonClassName="border border-[#DC9E00] text-[#DC9E00] hover:text-white hover:bg-[#DC9E00] py-[10px] px-[15px] mt-[20px]"
        imageClassName="h-auto w-full lg:w-1/2"
      />

      {/* Category Card */}
      <CardList
        title="OUR SERVICES"
        wrapperClassName="px-[30px] py-[30px] sm:py-[50px] lg:py-[100px] container mx-auto "
        items={OurServices}
        render={(item, _) => <CategoryCard {...item} />}
      />

      {/* Testimonial */}
      <Testimonial
        title="CLIENT TESTIMONIALS"
        wrapperClassName="p-[30px] lg:py-[100px] bg-[#EFEFEF]"
      />

      {/* Article */}
      <ArticleList
        title="INSIGHTS"
        items={ArticleListData}
        wrapperClassName="px-[30px] py-[30px] lg:py-[100px] container mx-auto"
      />

      {/* Form */}
      <section className="relative">
        <Image
          src="/img/uncategorize/statue-with-scale.jpg"
          alt="Statue with scale"
          width={1440}
          height={600}
          className="w-full absolute h-full object-cover"
        />

        <form className="p-[30px] container mx-auto relative flex flex-col items-center lg:items-end">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[40px] leading-normal tracking-[0.8px] text-white">
              Free Case Evaluation
            </h2>
            <div className="mt-[10px] flex flex-col gap-[5px] text-white text-[18px] font-light leading-[30px] tracking-[0.54px]">
              <p>Speak with a lawyer today, no strings attached.</p>
              <p>
                Call 812 345-6789 for a Free Consultation. We are available
                24/7.
              </p>
            </div>
            <div className="mt-[30px]">
              <div className="flex gap-[20px]">
                <InputText
                  inputAttributes={{
                    placeholder: "Name",
                    className: "p-2 outline-0 w-full",
                  }}
                />

                <InputText
                  inputAttributes={{
                    placeholder: "Email",
                    className: "p-2 outline-0 w-full",
                  }}
                />
              </div>

              <TextArea
                textAreaAttributes={{
                  className: "w-full p-2",
                  rows: 3,
                  placeholder: "Tell us about your case",
                }}
              />

              <span>
                <p className="mt-[10px] text-[10px] font-medium leading-[18px] tracking-[0.3px] text-white">
                  This site is protected by reCAPTCHA and the Google
                  <Link href="#" className="text-[#DC9E00]">
                    {" Privacy Policy "}
                  </Link>
                  and
                  <Link href="#" className="text-[#DC9E00]">
                    {" Terms of Service "}
                  </Link>
                  apply.
                </p>
              </span>

              <Button label="SUBMIT" buttonAttributes={{ type: "submit" }} />
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}
