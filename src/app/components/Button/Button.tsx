import { ButtonProps } from "@/app/interfaces"

export default function Button(props: ButtonProps) {
  const { label, className, onClick } = props
  return (
    <div className={`flex ${className ?? "px-4"}`}>
      <button
        onClick={() => {
          if (onClick) onClick()
        }}
      >
        <span>{label}</span>
      </button>
    </div>
  )
}
