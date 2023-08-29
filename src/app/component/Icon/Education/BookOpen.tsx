import { IconProps } from "@/app/interfaces"

export default function BookOpen({
  width = 30,
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
      fill="currentColor"
    >
      <path
        d="M14.8462 4.52566C12.3965 2.33317 9.16164 1 5.61538 1C3.99707 1 2.4436 1.27763 1 1.78787V23.7109C2.4436 23.2007 3.99707 22.9231 5.61538 22.9231C9.16164 22.9231 12.3965 24.2562 14.8462 26.4487M14.8462 4.52566C17.2958 2.33317 20.5307 1 24.0769 1C25.6952 1 27.2487 1.27763 28.6923 1.78787V23.7109C27.2487 23.2007 25.6952 22.9231 24.0769 22.9231C20.5307 22.9231 17.2958 24.2562 14.8462 26.4487M14.8462 4.52566V26.4487"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
