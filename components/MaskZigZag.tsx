export function MaskZigZag() {
  const height = "36px";

  return (
    <svg className="h-full w-full sr-only">
      <defs>
        <pattern
          id="mask-zig-zag-pattern"
          x="0"
          y="calc(100% + 1px)"
          width="100"
          height={height}
          patternUnits="userSpaceOnUse"
          className="animSlideX"
        >
          <path
            d="M100 0.636353L52.9409 34.8612C51.1876 36.1363 48.8124 36.1363 47.0591 34.8612L0 0.636353V0H100V0.636353Z"
            fill="white"
          />
        </pattern>
      </defs>

      <defs height="100%" width="100%">
        <mask id="mask-zig-zag-mask">
          <rect width="100%" height={`calc(100% - ${height} + 2px)`} fill="white" />
          <rect y={`calc(100% - ${height} + 1px)`} width="100%" height={height} fill="url(#mask-zig-zag-pattern)" />
        </mask>
      </defs>
    </svg>
  );
}

/* 
----------------------------------------
# Explanation:
----------------------------------------

## Why height "36"?

## Why is y "calc(100% - 36px + 1px)"?

## Why is the first mask rect's height "calc(100% - 36px + 2px)"?

## Why two shapes in mask?

## What about "patternUnits" in <pattern>?

## Between white and black, which one is visibility?
  - White means visible area. You can use the whole grayscale in masks.

*/
