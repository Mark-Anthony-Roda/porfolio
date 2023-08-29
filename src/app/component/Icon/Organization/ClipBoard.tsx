import { IconProps } from "@/app/interfaces"

export default function ClipBoard({
  width = 25,
  height = 32,
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
        d="M18.1781 3.51982C17.7679 2.06572 16.4315 1 14.8462 1H10.2308C8.64544 1 7.30903 2.06572 6.89887 3.51982M18.1781 3.51982C18.2625 3.81923 18.3077 4.13511 18.3077 4.46154V4.46154C18.3077 5.09879 17.7911 5.61538 17.1538 5.61538H7.92308C7.28583 5.61538 6.76923 5.09879 6.76923 4.46154V4.46154C6.76923 4.13511 6.81441 3.81923 6.89887 3.51982M18.1781 3.51982C19.1722 3.5949 20.1608 3.68966 21.1436 3.80371C22.8368 4.00021 24.0769 5.46 24.0769 7.16459V27.5385C24.0769 29.4502 22.5271 31 20.6154 31H4.46154C2.54978 31 1 29.4502 1 27.5385V7.1646C1 5.46 2.24012 4.00021 3.93335 3.80371C4.9161 3.68966 5.90474 3.5949 6.89887 3.51982"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
