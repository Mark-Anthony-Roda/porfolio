import { HiOutlineGlobeAlt } from "react-icons/hi"
import { MenuItemProps } from "../interfaces"

export const HeaderMenu: MenuItemProps[] = [
  {
    label: "My websites",
    key: "my-webistes",
    url: "/",
    type: "link",
    // icon: <HiOutlineGlobeAlt />,
    // iconPlacement: "bottom",
  },
  {
    label: "Plans",
    key: "plans",
    url: "/plans",
    type: "link",
  },
  {
    label: "Templates",
    key: "templates",
    url: "templates",
    type: "link",
  },
  {
    label: "Services",
    key: "services",
    url: "services",
    type: "link",
    children: [
      {
        label: "Solutions",
        key: "solutions-1",
        url: "/services/solutions",
        type: "link",
      },
    ],
  },
  {
    label: "Blog",
    key: "blog",
    url: "blog",
    type: "link",
  },
  {
    label: "Features",
    key: "features",
    url: "blog",
    type: "button",
    children: [
      {
        label: "Main",
        key: "main",
        url: "/features/main",
        type: "link",
      },
      {
        label: "Shops",
        key: "shops",
        url: "/features/shops",
        type: "link",
      },
      {
        label: "Websites",
        key: "websites",
        url: "/features/websites",
        type: "link",
      },
      {
        label: "Blogs",
        key: "blogs",
        url: "/features/blogs",
        type: "link",
      },
    ],
  },
  {
    label: "White Label",
    key: "white-label",
    url: "white-label",
    type: "link",
  },
]
