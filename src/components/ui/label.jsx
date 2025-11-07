import React from 'react';
import { cn } from '@/lib/utils';

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      'text-sm font-medium text-[#001F3F] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block mb-2',
      className
    )}
    {...props}
  />
));
Label.displayName = 'Label';

export { Label };