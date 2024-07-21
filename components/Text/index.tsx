import { cva } from "class-variance-authority";

// Type Definition
type props = {
  shadow?: "off" | "subtle" | "contrast";
} & React.ComponentPropsWithoutRef<"input">;

// Style Definition
const style = {
  wrapper: cva(["text-zinc-50 cursor-text", "hover", "active:"], {
    variants: {
      shadow: {
        off: [""],
        subtle: [""],
        contrast: [""],
      },
    },
  }),
};

// Component Definition
export const Text: React.FC<props> = ({
  className,
  children,
  shadow = "off",
  ...props
}: props) => {
  // HTML
  return (
    <p className={style.wrapper({ shadow, className })} {...props}>
      {children}
    </p>
  );
};
