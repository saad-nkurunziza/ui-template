import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-block px-2 py-0.5 rounded-full font-medium text-sm',
  {
    variants: {
      variant: {
        default: 'bg-blue-500 text-blue-100 dark:bg-blue-700',
        outline:
          'bg-transparent border dark:border-blue-700 dark:text-blue-700',
        warning: 'bg-yellow-500 text-yellow-100 dark:bg-yellow-600',
        destructive: 'bg-red-500 text-red-100 dark:bg-red-600',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <span
        className={cn(badgeVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
