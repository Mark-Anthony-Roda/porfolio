import { MenuProps } from "@/app/interfaces"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import {  useState } from "react"

export default function Menu(props: MenuProps) {
  const { items, className, defaultActive, fromQueryString } = props
  const pathname = usePathname()
  const initialActive = items.find((item) => item.url === pathname)

  const queryParams = useSearchParams()

  const paramsActive = fromQueryString
    ? queryParams.get(fromQueryString) ?? defaultActive
    : null

  const [activeMenu, setActiveMenu] = useState<string | number | undefined>(
    paramsActive ?? initialActive?.key ?? initialActive?.url
  )

  return (
    <div className={`flex flex-wrap ${className ?? ""}`}>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <Link
              className={`${item.className ?? ""} ${
                activeMenu === item.key
                  ? item.activeClassName ?? "text-[#DC9E00]"
                  : ""
              }`}
              href={item.url}
              onClick={() => {
                if (item.key) setActiveMenu(item.key)
              }}
            >
              {item.label}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
