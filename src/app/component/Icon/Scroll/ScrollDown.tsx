import { IconProps } from "@/app/interfaces"

export default function ScrollDown({
  width = 36,
  height = 137,
  stroke = "#0F172A",
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
      <g filter="url(#filter0_d_692_21)">
        <circle cx="18" cy="82" r="14" fill="currentColor" />
        <path
          d="M24 77L18 82.5556L12 77M24 81.4444L18 87L12 81.4444"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="18" y="4" width="1" height="37" fill="currentColor" />
        <rect x="18" y="96" width="1" height="37" fill="currentColor" />
      </g>
      <defs>
        <filter
          id="filter0_d_692_21"
          x="0"
          y="0"
          width="36"
          height="137"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_692_21"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_692_21"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
