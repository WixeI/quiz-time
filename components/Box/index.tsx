import { cva } from "class-variance-authority";

// Type Definition
type props = {} & React.ComponentPropsWithoutRef<"div">;

// Style Definition
const style = {
  wrapper: cva([""]),
};

// Component Definition
export const Box: React.FC<props> = ({
  className,
  children,
  ...props
}: props) => {
  // HTML
  return (
    <div className={style.wrapper({ className })} {...props}>
      {children}
    </div>
  );
};
