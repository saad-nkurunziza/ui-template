import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'font-semibold py-1 px-4 rounded-md shadow transition transform active:scale-95 focus:outline-none focus:ring-2',
  {
    variants: {
      variant: {
        default:
          'bg-blue-500 text-white focus:ring-blue-400 dark:bg-blue-700 dark:focus:ring-blue-600',
        outline: 'bg-transparent border focus:ring-neutral-100/80',
        warning:
          'bg-yellow-500 text-white focus:ring-yellow-400 dark:bg-yellow-600 dark:focus:ring-yellow-500',
        destructive:
          'bg-red-500 text-white focus:ring-red-400 dark:bg-red-600 dark:focus:ring-red-500',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
