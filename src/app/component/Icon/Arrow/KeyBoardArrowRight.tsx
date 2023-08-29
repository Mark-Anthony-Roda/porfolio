import { IconProps } from "@/app/interfaces"

export default function KeyBoardArrowRight({
  width = 26,
  height = 26,
  ...otherProps
}: IconProps) {
  return (
    <svg
      {...otherProps}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox={`0 0 ${width} ${height}`}
      height={width}
      width={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  )
}
