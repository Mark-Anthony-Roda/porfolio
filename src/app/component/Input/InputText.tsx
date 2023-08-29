import { TextProps } from "@/app/interfaces"

export default function InputText(props: TextProps) {
  const { label, inputAttributes = {}, hasError } = props

  return (
    <div className="flex flex-col gap-[10px] w-full">
      {label && <span>{label}</span>}
      <input type="text" {...inputAttributes} />
      {hasError && <span className="text-red-600">{hasError.message}</span>}
    </div>
  )
}
