import { FooterProps } from "@/app/interfaces"
import Link from "next/link"

export default function Footer(props: FooterProps) {
  const { items, wrapperClassName } = props
  return (
    <div className="bg-[#353535]">
      <div
        className={
          wrapperClassName && wrapperClassName !== "" ? wrapperClassName : ""
        }
      >
        <div className="grid grid-cols-1 text-center sm:text-start sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">

        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={
                item.className && item.className !== ""
                  ? item.className
                  : "w-full"
              }
            >
              {item.contents.map((content, idx) => {
                return (
                  <div key={idx} className={content.className ?? ""}>
                    {content.label && (
                      <p>
                        {content.url ? (
                          <Link
                            href={content.url}
                            target={content.hrefTaget ?? "_self"}
                          >
                            {content.label}
                          </Link>
                        ) : (
                          content.label
                        )}
                      </p>
                    )}
                    {content.children && (
                      <Footer
                        items={[content.children]}
                        containerClassName="w-full flex gap-[10px]"
                      />
                    )}
                  </div>
                )
              })}
            </div>
          )
        })}
        </div>
      </div>
    </div>
  )
}
