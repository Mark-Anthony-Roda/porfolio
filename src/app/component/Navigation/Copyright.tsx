import { CopyrightProps } from "@/app/interfaces"

export default function Copyright(props: CopyrightProps) {
  const { label, className = "w-full" } = props
  return (
    <div className={className && className !== "" ? className : ""}>
      <p>{label}</p>
    </div>
  )
}
