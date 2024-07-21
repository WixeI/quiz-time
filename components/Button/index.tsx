import { cva } from "class-variance-authority";
import {
  KeyboardEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";

// Type Definition
type props = {
  size?: "sm" | "md";
} & React.ComponentPropsWithoutRef<"button">;

// Style Definition
const style = {
  button: cva(
    [
      "text-white rounded-xl inner bg-zinc-800 outline outline-2 outline-zinc-50 -outline-offset-4 px-6 py-4 shadow-md text-2xl",
      "focus:outline-yellow-400",
      "hover:bg-zinc-700",
      "active:animate-shake active:scale-95",
    ],
    {
      variants: {
        size: {
          sm: [""],
          md: [""],
        },
      },
    },
  ),
};

// Component Definition
export const Button: React.FC<props> = ({
  className,
  children,
  size = "sm",
  ...props
}: props) => {
  const [sfxClick, setSfxClick] = useState<HTMLAudioElement>();

  useEffect(() => {
    // Mounting Operations
    const initialAudio = new Audio("/assets/sfx/button_click.wav");
    initialAudio.volume = 0.2;
    setSfxClick(initialAudio);

    // When Unmounting, remove Audio object
    return () => {
      sfxClick && (sfxClick.srcObject = null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sound Events
  const handleKeyDown: KeyboardEventHandler = (e) => {
    if (e.key !== " ") return;
    sfxClick && sfxClick.play();
  };

  const handleClick: MouseEventHandler = (e) => {
    sfxClick && sfxClick.play();
  };

  // HTML
  return (
    <button
      onKeyDown={handleKeyDown}
      onMouseDown={handleClick}
      className={style.button({ size, className })}
      {...props}
    >
      {children}
    </button>
  );
};
