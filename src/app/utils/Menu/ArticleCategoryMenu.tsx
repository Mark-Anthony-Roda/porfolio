import { MenuListProps } from "@/app/interfaces"

export const ArticleCategoryMenu: MenuListProps[] = [
  {
    key: "news-update",
    url: "/news?category=news-update",
    type: "link",
    label: "NEWS & UPDATES",
    className: "hover:text-[#DC9E00] hover:underline hover:underline-offset-8",
    activeClassName: "text-[#DC9E00] underline underline-offset-8",
  },
  {
    key: "events",
    url: "/news?category=events",
    type: "link",
    label: "EVENTS",
    className: "hover:text-[#DC9E00] hover:underline hover:underline-offset-8",
    activeClassName: "text-[#DC9E00] underline underline-offset-8",
  },
  {
    key: "legal-faqs",
    url: "/news?category=legal-faqs",
    type: "link",
    label: "LEGAL FAQs",
    className: "hover:text-[#DC9E00] hover:underline hover:underline-offset-8",
    activeClassName: "text-[#DC9E00] underline underline-offset-8",
  },
  {
    key: "juris-prudence",
    url: "/news?category=juris-prudence",
    type: "link",
    label: "JURIS PRUDENCE",
    className: "hover:text-[#DC9E00] hover:underline hover:underline-offset-8",
    activeClassName: "text-[#DC9E00] underline underline-offset-8",
  },
  {
    key: "law-library",
    url: "/news?category=law-library",
    type: "link",
    label: "LAW LIBRARY",
    className: "hover:text-[#DC9E00] hover:underline hover:underline-offset-8",
    activeClassName: "text-[#DC9E00] underline underline-offset-8",
  },
]
