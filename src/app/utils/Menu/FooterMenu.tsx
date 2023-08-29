import { Facebook, Instagram, Logo, Twitter } from "@/app/component/Icon"
import { FooterContentProps, FooterMenuProps } from "@/app/interfaces"

export const FooterMenu: FooterContentProps[] = [
  {
    className: "",
    contents: [
      {
        label: <Logo />,
        url: "#",
        className: "text-[#DC9E00] flex justify-center sm:justify-start w-full",
      },
      {
        label:
          "This is fill in text. It is here temporarily, and will be replaced with the proper text shortly. ",
        className:
          "mt-[20px] text-white text-[12px] font-light leading-[18px] tracking-[0.36px]",
      },
      {
        label: "Copyright © 2023 HASP. All rights reserved",
        className: "mt-[30px] text-white text-[12px] font-light leading-[23px]",
      },
      {
        children: {
          className:
            "flex text-[#DC9E00] justify-center sm:justify-start gap-[20px] mt-[10px]",
          contents: [
            {
              label: <Instagram />,
              url: "https://www.instagram.com",
              hrefTaget: "_blank",
            },
            {
              label: <Facebook />,
              url: "https://www.facebook.com",
              hrefTaget: "_blank",
            },
            {
              label: <Twitter />,
              url: "https://www.twitter.com",
              hrefTaget: "_blank",
            },
          ],
        },
      },
    ],
  },
  {
    className:
      "flex flex-col h-full justify-between text-white text-[14px] font-light leading-normal tracking-[0.7px] gap-[15px] sm:gap-[0px]",
    contents: [
      {
        label: "HOME",
        url: "/",
        className: "hover:text-[#DC9E00]",
      },
      {
        label: "ABOUT US",
        url: "/about-us",
        className: "hover:text-[#DC9E00]",
      },
      {
        label: "ATTORNEYS",
        url: "/",
        className: "hover:text-[#DC9E00]",
      },
      {
        label: "OUR PRACTICES",
        url: "/",
        className: "hover:text-[#DC9E00]",
      },
      {
        label: "NEWS",
        url: "/",
        className: "hover:text-[#DC9E00]",
      },
    ],
  },
  {
    className: "",
    contents: [
      {
        label: "CONTACT US",
        url: "/",
        className:
          "text-white text-[14px] font-light leading-normal tracking-[0.7px] mb-[15px] hover:text-[#DC9E00]",
      },
      {
        label: "PRIVACY POLICY",
        url: "/about-us",
        className:
          "text-white text-[14px] font-light leading-normal tracking-[0.7px] mb-[15px] hover:text-[#DC9E00]",
      },
      {
        label: "TERMS & CONDITIONS",
        url: "/",
        className:
          "text-white text-[14px] font-light leading-normal tracking-[0.7px] mb-[15px] hover:text-[#DC9E00]",
      },
      {
        label: "FAQS",
        url: "/",
        className:
          "text-white text-[14px] font-light leading-normal tracking-[0.7px] mt-auto hover:text-[#DC9E00]",
      },
    ],
  },
  {
    className: "",
    contents: [
      {
        label: `Unit 123, Block 123
      Sample Street, Sample City
      Country, 1234 Zip Code`,
        className:
          "text-white text-[14px] font-light leading-normal tracking-[0.7px] mb-[15px]",
      },
      {
        label: "Contact No, 1 - 123 456 7890",
        className:
          "text-white text-[14px] font-light leading-normal tracking-[0.7px] mb-[15px]",
      },
      {
        label: "Contact No, 2 - 123 456 7890",
        className:
          "text-white text-[14px] font-light leading-normal tracking-[0.7px] mt-auto",
      },
    ],
  },
]
