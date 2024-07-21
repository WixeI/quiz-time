import { cva } from "class-variance-authority";

// Type Definition
type props = {
  Shape: React.ElementType;
  size?: "sm" | "md" | "lg";
  main?: boolean;
} & React.ComponentPropsWithoutRef<"div">;

// Style Definition
const style = {
  wrapper: cva(["fill-zinc-50  transition-all", "active:"], {
    variants: {
      size: {
        sm: ["h-8 w-8"],
        md: ["h-10 w-10"],
        lg: ["h-12 w-12"],
      },
      main: {
        true: ["drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]", "hover:scale-105"],
      },
    },
  }),
};

// Component Definition
export const Icon: React.FC<props> = ({
  className,
  size = "sm",
  main,
  Shape,
  ...props
}: props) => {
  // HTML
  return (
    <Shape className={style.wrapper({ size, main, className })} {...props} />
  );
};
