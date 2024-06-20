import { cva } from "class-variance-authority";
import { FormEventHandler, KeyboardEventHandler, MouseEventHandler, useEffect, useRef, useState } from "react";
import { LuKeyboard } from "react-icons/lu";

// Type Definition
type props = {
  area?: "sm" | "md";
} & React.ComponentPropsWithoutRef<"input">;

// Style Definition
const style = {
  wrapper: cva(
    [
      "flex transition-all flex-row-reverse gap-2 cursor-text items-center text-white rounded-full bg-zinc-800 outline outline-2 outline-zinc-50 -outline-offset-4 pl-[2px] pr-6 py-[2px] shadow-md text-lg",
      "focus-within:outline-yellow-400",
      "hover:scale-105",
      "active:",
    ],
    {
      variants: {
        area: {
          sm: [""],
          md: [""],
        },
      },
    }
  ),
  input: cva(["bg-zinc-800 peer", "focus:outline-none", "hover:", "active:"]),
};

// Component Definition
export const Input: React.FC<props> = ({ className, area = "sm", ...props }: props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [sfxClick, setSfxClick] = useState<HTMLAudioElement>();

  // Handle Sound
  useEffect(() => {
    // Mounting Operations
    const audio = new Audio("/assets/sfx/button_click.wav");
    audio.volume = 0.2;
    setSfxClick(audio);

    // When Unmounting, remove Audio object
    return () => {
      sfxClick && (sfxClick.srcObject = null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sound Events
  const handleKeyDownSound: FormEventHandler = (e) => {
    sfxClick && (sfxClick.src = "/assets/sfx/switch_sound.wav");
    sfxClick && sfxClick.play();
  };

  // Handle focus
  const handleClickFocus: MouseEventHandler = (e) => {
    sfxClick && (sfxClick.src = "/assets/sfx/button_click.wav");
    sfxClick && sfxClick.play();
    inputRef.current?.focus();
    e.preventDefault();
  };

  // HTML
  return (
    <div onMouseDown={handleClickFocus} className={style.wrapper({ area, className })}>
      <input onInput={handleKeyDownSound} ref={inputRef} className={style.input({ className })} {...props}></input>

      {/* Leading Icon */}
      <div className="peer-focus:outline-yellow-400 flex items-center justify-center h-14 w-14 aspect-square rounded-full outline outline-2 outline-zinc-50 -outline-offset-2 bg-zinc-800">
        <LuKeyboard className="h-6 w-6" />
      </div>
    </div>
  );
};
