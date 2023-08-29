import { TextAreaProps } from "@/app/interfaces"

export default function TextArea(props: TextAreaProps) {
  const { label, textAreaAttributes = {}, hasError } = props

  return (
    <div className="mt-[20px] w-full">
      {label && <span>{label}</span>}
      <textarea {...textAreaAttributes} />
      {hasError && <span className="text-red-600">{hasError.message}</span>}
    </div>
  )
}
