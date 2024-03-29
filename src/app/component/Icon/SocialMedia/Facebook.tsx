import { IconProps } from "@/app/interfaces"

export default function Facebook({
  width = 25,
  height = 25,
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
        d="M12.5 0C5.62499 0 0 5.63504 0 12.5753C0 18.8504 4.57499 24.0587 10.55 25V16.2149H7.37499V12.5753H10.55V9.80171C10.55 6.65161 12.4125 4.91968 15.275 4.91968C16.6375 4.91968 18.0625 5.15813 18.0625 5.15813V8.25803H16.4875C14.9375 8.25803 14.45 9.2244 14.45 10.2159V12.5753H17.925L17.3625 16.2149H14.45V25C17.3955 24.5329 20.0777 23.024 22.0124 20.7456C23.947 18.4671 25.0067 15.5693 25 12.5753C25 5.63504 19.375 0 12.5 0Z"
        fill="currentColor"
      />
    </svg>
  )
}
