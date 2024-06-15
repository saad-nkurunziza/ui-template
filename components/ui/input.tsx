import * as React from 'react';
import { cn } from '@/lib/utils';

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "bg-input text-foreground border border-border rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-ring dark:bg-input dark:border-border dark:text-foreground dark:focus:ring-ring",
        className
      )}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
