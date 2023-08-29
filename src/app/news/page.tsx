"use client"

import { Menu } from "@/app/component/Navigation"
import { ArticleCategoryMenu } from "@/app/utils/Menu"
import { DropdownSelect } from "@/app/component/Dropdown"
import { DropdownList } from "@/app/utils/DropdownList"
import { DropdownListProps } from "@/app/interfaces/Dropdown"
import { useRouter, useSearchParams } from "next/navigation"

export default function News() {
  const router = useRouter()
  const queryStringParams = useSearchParams()

  const transformMenuToDropdownList: DropdownListProps[] =
    ArticleCategoryMenu.map((item) => {
      return { label: item.label, value: item.url ?? item.key ?? item.label }
    })

  const getDefaultTab = () => {
    const categoryParams = queryStringParams.get("category")

    console.log(
      transformMenuToDropdownList.find((item) => item.value === categoryParams),
      categoryParams,
      transformMenuToDropdownList,
      "test"
    )
    if (categoryParams)
      return (
        transformMenuToDropdownList.find(
          (item) => item.value === categoryParams
        )?.value ?? transformMenuToDropdownList[0].value
      )

    return transformMenuToDropdownList[0].value
  }

  return (
    <div className="bg-[#EFEFEF]">
      <section className="flex flex-wrap md:flex-nowrap gap-4 py-[50px] font-medium leading-6 justify-between container mx-auto px-[30px]">
        <div className="w-full flex flex-col gap-[20px]">
          <h2 className="text-gray-500 text-base">ARTICLE CATEGORIES</h2>
          <Menu
            className={`hidden xl:flex gap-16 py-[10px] text-[#555] text-base leading-6`}
            items={ArticleCategoryMenu}
            defaultActive="news-update"
            fromQueryString="category"
          />

          <DropdownSelect
            items={transformMenuToDropdownList}
            activeItem={getDefaultTab()}
            wrapperClassName="flex xl:hidden flex-col w-full"
            onSelect={(elem: DropdownListProps) => {
              if (typeof elem.value === "string")
                router.push(elem.value ?? elem.label)
            }}
          />
        </div>
        <div className="w-full flex flex-col gap-[20px] xl:w-[30%]">
          <h2 className="text-gray-500 text-base">SORT BY</h2>
          <DropdownSelect
            items={DropdownList}
            activeItem="latest-upload"
            wrapperClassName="w-full"
          />
        </div>
      </section>
    </div>
  )
}
