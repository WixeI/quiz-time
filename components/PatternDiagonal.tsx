export function PatternDiagonal() {
  return (
    <svg className="w-full h-full bg-zinc-200 absolute top-0 left-0 -z-10">
      <defs>
        <pattern
          className="fill-zinc-100 animSlideX"
          id="diagonal-stripes"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <rect
            id="Rectangle_middle"
            x="-9.15649"
            y="93.1615"
            width="144.699"
            height="23.998"
            transform="rotate(-45 -9.15649 93.1615)"
          />
          <rect
            id="Rectangle_t"
            x="-23.3746"
            y="7.69257"
            width="44.9639"
            height="23.7427"
            transform="rotate(-45 -23.3746 7.69257)"
          />
          <rect
            id="Rectangle-b"
            x="78.1135"
            y="105.908"
            width="44.9639"
            height="23.5823"
            transform="rotate(-45 78.1135 105.908)"
          />
        </pattern>
      </defs>

      <rect x="0" y="0" width="100%" height="100%" fill="url(#diagonal-stripes)"></rect>
    </svg>
  );
}
