import { QuoteDown, QuoteUp } from "@/app/component/Icon"
import { TestimonialCardProps } from "@/app/interfaces"
import Image from "next/image"

export default function TestimonialCard(props: TestimonialCardProps) {
  const {
    description,
    author,
    authorPosition,
    wrapperClassName = `bg-white p-[50px] min-w-full md:min-w-[50%] w-[50%] ${
      props.index && props.index !== 0 ? "opacity-50" : ""
    }`,
    descriptionClassName = "text-[22px] font-light leading-[32px] tracking-[0.44px] sm:px-[30px] py-[30px]",
    quoteClassName = "text-[#DC9E00]",
    signatureClassName = "mt-auto flex flex-col gap-[10px] sm:px-[50px]",
    authorLogoSrc,
    authorLogoClassName = "rounded-full w-[50px] h-[50px]",
    authorClassName = "text-[18px] font-medium leading-[23px] tracking-[0.36px]",
    authorPositionClassName = "text-[18px] font-light leading-[23px] tracking-[0.36px] italic",
    containerClassName,
    index,
  } = props

  return (
    <div className={containerClassName ?? ''}>
      <div
        className={
          wrapperClassName ??
          `bg-white p-[50px] min-w-full md:min-w-[50%] w-[50%] ${
            index && index !== 0 ? "opacity-50" : ""
          }`
        }
      >
        <div className="relative mb-[40px]">
          <p
            className={
              descriptionClassName && descriptionClassName !== ""
                ? descriptionClassName
                : "text-[22px] font-light leading-[32px] tracking-[0.44px] px-[50px] py-[30px]"
            }
          >
            {description}
          </p>
          <QuoteDown
            className={`absolute top-0 left-0 ${
              quoteClassName && quoteClassName !== ""
                ? quoteClassName
                : "text-[#DC9E00]"
            }`}
          />
          <QuoteUp
            className={`absolute bottom-0 right-0 ${
              quoteClassName && quoteClassName !== ""
                ? quoteClassName
                : "text-[#DC9E00]"
            }`}
          />
        </div>
        <div
          className={`${
            signatureClassName && signatureClassName !== ""
              ? signatureClassName
              : "mt-auto flex gap-[10px] px-[50px]"
          } 
    `}
        >
          {authorLogoSrc && (
            <Image
              className={`${
                authorLogoClassName && authorLogoClassName !== ""
                  ? authorLogoClassName
                  : "rounded-full w-[50px] h-[50px]"
              } 
          `}
              src={authorLogoSrc}
              alt="author logo"
              width={90}
              height={90}
            />
          )}
          <div className="flex flex-col gap-[10px] ">
            {typeof author === "string" ? (
              <p
                className={`${
                  authorClassName && authorClassName !== ""
                    ? authorClassName
                    : "text-[18px] font-medium leading-[23px] tracking-[0.36px]"
                } 
        `}
              >
                {author}
              </p>
            ) : (
              author
            )}
            <p
              className={`${
                authorPositionClassName && authorPositionClassName !== ""
                  ? authorPositionClassName
                  : "text-[18px] font-light leading-[23px] tracking-[0.36px] italic"
              } 
        `}
            >
              {authorPosition}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
