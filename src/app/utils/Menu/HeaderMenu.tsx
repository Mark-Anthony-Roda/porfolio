import { MenuListProps } from "@/app/interfaces"
import { SiHomeassistantcommunitystore } from "react-icons/si"
import {
  BsFillInfoCircleFill,
  BsNewspaper,
  BsPersonSquare,
} from "react-icons/bs"
import { IoMdContact } from "react-icons/io"
import { MdMiscellaneousServices } from "react-icons/md"
import { Facebook, Instagram, Twitter } from "@/app/component/Icon"
import { Fragment } from "react"

export const HeaderMenu: MenuListProps[] = [
  {
    key: "home",
    url: "/",
    type: "link",
    label: "Home",
    icon: <SiHomeassistantcommunitystore size={30} />,
    className: "py-2 px-1 xl:px-2 hover:text-[#DC9E00]",
    activeClassName: "text-[#DC9E00]",
  },
  {
    key: "about-us",
    url: "/about-us",
    type: "link",
    label: "About us",
    icon: <BsFillInfoCircleFill size={30} />,
    className: "py-2 px-1 xl:px-2 hover:text-[#DC9E00]",
    activeClassName: "text-[#DC9E00]",
  },
  {
    key: "attorneys",
    url: "/attorneys",
    type: "link",
    label: "Attorneys",
    icon: <BsPersonSquare size={30} />,
    className: "py-2 px-1 xl:px-2 hover:text-[#DC9E00]",
    activeClassName: "text-[#DC9E00]",
  },
  {
    key: "our-services",
    url: "/our-services",
    type: "link",
    label: "Our Services",
    icon: <MdMiscellaneousServices size={30} />,
    className: "py-2 px-1 xl:px-2 hover:text-[#DC9E00]",
    activeClassName: "text-[#DC9E00]",
  },
  {
    key: "news",
    url: "/news",
    type: "link",
    label: "News",
    icon: <BsNewspaper size={30} />,
    className: "py-2 px-1 xl:px-2 hover:text-[#DC9E00]",
    activeClassName: "text-[#DC9E00]",
  },
  {
    key: "contact-us",
    url: "/contact-us",
    type: "link",
    label: "Contact Us",
    mobileLabel: "Contact Us",
    className:
      "flex items-center gap-3 border border-white hover:border-[#DC9E00] hover:text-white hover:bg-[#DC9E00] px-3 py-2",
    activeClassName: "border-[#DC9E00] text-[#DC9E00] bg-[#DC9E00] text-white",
    menuType: "form",
  },
  {
    // key: "instagram",
    url: "https://instagram.com",
    type: "link",
    target: "_blank",
    label: <Instagram />,
    menuType: "external",
    className: "hover:text-[#DC9E00]",
    activeClassName: "text-[#DC9E00]",
  },
  {
    // key: "facebook",
    url: "https://facebook.com",
    type: "link",
    target: "_blank",
    label: <Facebook />,
    menuType: "external",
    className: "hover:text-[#DC9E00]",
    activeClassName: "text-[#DC9E00]",
  },
  {
    // key: "twitter",
    url: "https://twitter.com",
    type: "link",
    target: "_blank",
    label: <Twitter />,
    menuType: "external",
    className: "hover:text-[#DC9E00]",
    activeClassName: "text-[#DC9E00]",
  },
]
