import { ButtonProps } from "@/app/interfaces"

export default function Button(props: ButtonProps) {
  const { label, buttonAttributes = {} } = props
  return (
    <div className="w-full text-center mt-[40px] border border-[#DC9E00] py-[10px] px-[35px] cursor-pointer hover:bg-[#DC9E00] hover:text-white bg-[#DC9E00] text-white lg:text-[#DC9E00] lg:bg-transparent lg:w-fit">
      <button {...buttonAttributes}>{label}</button>
    </div>
  )
}
