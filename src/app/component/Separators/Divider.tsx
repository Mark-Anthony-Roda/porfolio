import { DividerProps } from "@/app/interfaces"

export default function Divider(props: DividerProps) {
  const {
    borderClassName,
    labelClassName,
    label,
    labelPosition = "center",
    wrapperClassName,
  } = props

  return (
    <section className={`flex w-full items-center ${wrapperClassName ?? ""}`}>
      {labelPosition !== "left" ? (
        <div
          className={`${borderClassName ?? ""} border w-full mr-[47px] ${
            label ? "hidden md:block" : ""
          }`}
        ></div>
      ) : null}
      {label ? (
        <span className={`${labelClassName ?? ""} md:whitespace-nowrap`}>
          {label}
        </span>
      ) : null}
      {labelPosition !== "right" ? (
        <div
          className={`${borderClassName ?? ""} border w-full ml-[47px] ${
            label ? "hidden md:block" : ""
          }`}
        ></div>
      ) : null}
    </section>
  )
}
