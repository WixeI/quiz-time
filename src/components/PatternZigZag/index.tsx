export function PatternZigZag() {
  return (
    <svg className="w-full h-full bg-zinc-900 absolute top-0 left-0 -z-10">
      <defs>
        <pattern
          className="fill-zinc-800/25 animSlideY"
          id="zig-zag-pattern"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <path
            id="Union"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M49.8418 3.27229L-16.2037 41.4037L-4.20465 62.1866L50.1562 30.8013L104.517 62.1866L116.516 41.4037L50.4706 3.27229L50.3134 3.00003L50.1562 3.09078L49.999 3.00003L49.8418 3.27229Z"
          />
          <path
            id="Union_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M49.8418 53.2723L-16.2037 91.4037L-4.20465 112.187L50.1562 80.8013L104.517 112.187L116.516 91.4037L50.4706 53.2723L50.3134 53L50.1562 53.0908L49.999 53L49.8418 53.2723Z"
          />
          <path
            id="Union_3"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50.0455 -46.7277L-16 -8.59635L-4.00098 12.1866L50.3599 -19.1987L104.721 12.1866L116.72 -8.59635L50.6743 -46.7277L50.5171 -47L50.3599 -46.9092L50.2027 -47L50.0455 -46.7277Z"
          />
        </pattern>
      </defs>

      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#zig-zag-pattern)"
      ></rect>
    </svg>
  );
}
