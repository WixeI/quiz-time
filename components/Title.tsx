import { cva } from "class-variance-authority";

// Type Definition
type props = {
  as: "h1" | "h2" | "h3" | "h4" | "h5";
  hasUnderline?: boolean;
  isRotated?: boolean;
} & React.ComponentPropsWithoutRef<"h1">;

// Style Definition
const style = {
  wrapper: cva(
    [
      "text-5xl text-zinc-50 masked-element transition-all font-rodinEB",
      "drop-shadow-[0_8px_4px_rgb(0,0,0,0.15)]",
      "hover:scale-105",
      "active:",
    ],
    {
      variants: {
        hasUnderline: {
          true: ["border-b-4 pb-2 border-b-slate-50 transition-all"],
        },
        isRotated: {
          true: ["-rotate-2"],
        },
      },
    }
  ),
};

// Component Definition
export const Title: React.FC<props> = ({
  className,
  children,
  as = "h1",
  hasUnderline,
  isRotated,
  ...props
}: props) => {
  const Element = as;
  // HTML
  return (
    <Element className={style.wrapper({ hasUnderline, isRotated, className })} {...props}>
      {children}
    </Element>
  );
};
