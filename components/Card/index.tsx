import { cva } from 'class-variance-authority';

import { PatternZigZag } from '../PatternZigZag';

// Type Definition
type props = {
  size?: 'sm' | 'md' | 'full';
} & React.ComponentPropsWithoutRef<'div'>;

// Style Definition
const style = {
  wrapper: cva(['relative overflow-hidden h-fit text-zinc-50 rounded-2xl py-8 px-6 inner-shadow', 'hover', 'active:'], {
    variants: {
      size: {
        sm: ['max-w-56'],
        md: ['max-w-72'],
        full: [''],
      },
    },
  }),
};

// Component Definition
export const Card: React.FC<props> = ({ className, children, size = 'sm', ...props }: props) => {
  // HTML
  return (
    <div className={style.wrapper({ size, className })} {...props}>
      <PatternZigZag />
      {children}
    </div>
  );
};
