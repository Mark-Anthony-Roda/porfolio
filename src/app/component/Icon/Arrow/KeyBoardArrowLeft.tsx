import { IconProps } from "@/app/interfaces"

export default function KeyBoardArrowLeft({
  width = 26,
  height = 26,
  onClick,
  ...otherProps
}: IconProps) {
  return (
    <svg
      {...otherProps}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        d="M12.9859 24L2 13L12.9859 2"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
