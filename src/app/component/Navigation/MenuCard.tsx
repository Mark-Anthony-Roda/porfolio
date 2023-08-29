import { MenuProps } from "@/app/interfaces"
import Link from "next/link"
import { Divider } from "@/app/component/Separators"

export default function MenuCard(props: MenuProps) {
  const { className, items, onClick } = props

  const mainMenu = items.filter(
    (item) => !item.menuType || item.menuType === "main"
  )
  const externalMenu = items.filter((item) => item.menuType === "external")
  const formMenu = items.filter((item) => item.menuType === "form")

  return (
    <section className={className ?? ""}>
      <div className="grid grid-cols-3 gap-4 p-3">
        {mainMenu.map((item, index) => {
          return (
            <div key={index} className="px-3 lg:px-2 xl:px-3 text-center ">
              <Link
                className={`p-3 flex flex-col gap-2 items-center hover:text-[#DC9E00] ${
                  item.className ?? ""
                }`}
                href={item.url}
                onClick={(event) => {
                  if (onClick) onClick(event)
                }}
              >
                {item.icon}
                {item.label}
              </Link>
            </div>
          )
        })}
      </div>

      {formMenu.map((item, index) => (
        <div key={index} className="px-3 flex w-full lg:px-2 xl:px-3">
          <Link
            className={`py-2 w-full text-center px-1 xl:px-2 hover:text-white border border-[#555] rounded-lg hover:border-[#DC9E00] hover:bg-[#DC9E00]`}
            href={item.url}
          >
            <div className="hidden xl:block">{item.label}</div>
            {item.mobileLabel && (
              <div className="block xl:hidden">{item.mobileLabel}</div>
            )}
          </Link>
        </div>
      ))}

      <Divider wrapperClassName="w-full" />

      {externalMenu.length && (
        <div className={`flex items-center justify-center flex-wrap`}>
          {externalMenu.map((item, index) => {
            return (
              <div key={index} className="px-3 lg:px-2 xl:px-3">
                <Link
                  className={`${item.className ?? ""} hover:text-[#DC9E00]`}
                  href={item.url}
                >
                  {item.label}
                </Link>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
