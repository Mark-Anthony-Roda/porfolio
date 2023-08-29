import { IconProps } from "@/app/interfaces"

export default function NewsPaper({
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
        d="M14.8462 6.76923H17.1538M14.8462 11.3846H17.1538M5.61538 16H17.1538M5.61538 20.6154H17.1538M21.7692 6.76923H26.9615C27.9174 6.76923 28.6923 7.54412 28.6923 8.5V22.9231C28.6923 24.8348 27.1425 26.3846 25.2308 26.3846M21.7692 6.76923V22.9231C21.7692 24.8348 23.319 26.3846 25.2308 26.3846M21.7692 6.76923V2.73077C21.7692 1.77489 20.9943 1 20.0385 1H2.73077C1.77489 1 1 1.77489 1 2.73077V22.9231C1 24.8348 2.54978 26.3846 4.46154 26.3846H25.2308M5.61538 6.76923H10.2308V11.3846H5.61538V6.76923Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
