import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/srccomponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rodinM: ["FOT-Rodin Pro M", "ui-sans-serif"],
        rodinDB: ["FOT-Rodin Pro DB", "ui-sans-serif"],
        rodinEB: ["FOT-Rodin Pro EB", "ui-sans-serif"],
        rodinUB: ["FOT-Rodin Pro UB", "ui-sans-serif"],
      },
      animation: {
        shake: "shake 0.1s infinite",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "scale(0.95) rotate(-1deg)" },
          "50%": { transform: "scale(0.95) rotate(1deg)" },
        },
      },
      spacing: {
        "mask-zig-zag": "36px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }: PluginAPI) {
      addUtilities({
        ".mask-zig-zag": {
          "mask-image": "url(#mask-zig-zag-mask)",
          "margin-bottom": `-${theme("spacing.mask-zig-zag")}`,
        },
      });
    }),
  ],
  tailwindFunctions: ["tv"],
};
export default config;
