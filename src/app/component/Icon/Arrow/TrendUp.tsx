import { IconProps } from "@/app/interfaces"

export default function TrendUp({
  width = 32,
  height = 28,
  stroke = "#DC9E00",
  ...otherProps
}: IconProps) {
  return (
    <svg
      {...otherProps}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        d="M1 18.6359L11.3846 8.25124L18.0099 14.8765C19.8617 11.233 22.9295 8.17785 26.9542 6.38592L31.1706 4.50868M31.1706 4.50868L22.0302 1M31.1706 4.50868L27.6619 13.6491"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
