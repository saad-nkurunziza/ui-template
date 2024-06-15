import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const toastVariants = cva(
  'py-3.5 px-4 shadow-md  flex items-center space-x-10 rounded-md',
  {
    variants: {
      type: {
        info: 'bg-neutral-700 text-muted-foreground ring-neutral-500 ring-2 dark:bg-blue-700',
        warning: 'bg-yellow-500 text-white dark:bg-yellow-600',
        destructive: 'bg-red-500 text-white dark:bg-red-600',
      },
    },
    defaultVariants: {
      type: 'info',
    },
  }
);

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div
        className={cn(toastVariants({ type }), className)}
        ref={ref}
        {...props}
      >
        {props.children}

      </div>
    );
  }
);
Toast.displayName = 'Toast';

export { Toast, toastVariants };
