import { cva } from "class-variance-authority";

// Type Definition
type props = {
  size?: "sm" | "md" | "full";
} & React.ComponentPropsWithoutRef<"div">;

// Style Definition
const style = {
  wrapper: cva(
    ["text-zinc-50 bg-zinc-900/70 rounded-2xl p-3", "hover", "active:"],
    {
      variants: {
        size: {
          sm: ["max-w-56"],
          md: ["max-w-72"],
          full: [""],
        },
      },
    },
  ),
};

// Component Definition
export const Balloon: React.FC<props> = ({
  className,
  children,
  size = "sm",
  ...props
}: props) => {
  // HTML
  return (
    <div className={style.wrapper({ size, className })} {...props}>
      {children}
    </div>
  );
};
