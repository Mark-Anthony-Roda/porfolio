import {
  BookOpen,
  Briefcase,
  ClipBoard,
  MoreO,
  NewsPaper,
  TrendUp,
} from "@/app/component/Icon"
import { CategoryCardProps } from "@/app/interfaces"

export const OurServices: CategoryCardProps[] = [
  {
    title: "TAX",
    description:
      "This is fill in text. It is here temporarily, and will be replaced with the proper text shortly. It is repeated many times so we will see what the website will look like with text.",
    icon: <TrendUp height={32} />,
  },
  {
    title: "COUNSEL",
    description:
      "This is fill in text. It is here temporarily, and will be replaced with the proper text shortly. It is repeated many times so we will see what the website will look like with text.",
    icon: <NewsPaper height={32} />,
  },
  {
    title: "COMPLIANCE",
    description:
      "This is fill in text. It is here temporarily, and will be replaced with the proper text shortly. It is repeated many times so we will see what the website will look like with text.",
    icon: <Briefcase height={32} />,
  },
  {
    title: "LEGAL DEPT.",
    description:
      "This is fill in text. It is here temporarily, and will be replaced with the proper text shortly. It is repeated many times so we will see what the website will look like with text.",
    icon: <BookOpen height={32} />,
  },
  {
    title: "SECRETARIAL",
    description:
      "This is fill in text. It is here temporarily, and will be replaced with the proper text shortly. It is repeated many times so we will see what the website will look like with text.",
    icon: <ClipBoard height={32} />,
  },
  {
    title: "MORE",
    description:
      "This is fill in text. It is here temporarily, and will be replaced with the proper text shortly. It is repeated many times so we will see what the website will look like with text.",
    icon: <MoreO height={32} />,
    href: "#",
    hrefLabel: "VIEW OUR PRACTICES",
  },
]
