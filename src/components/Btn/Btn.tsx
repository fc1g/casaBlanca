/* eslint-disable react/display-name */
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import cn from '../../utils/helpers/cn';

const btnVariants = cva(
  'focus:ring-4 font-medium rounded-lg text-sm focus:outline-none',
  {
    variants: {
      variant: {
        default:
          'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800',
        alternative:
          'text-dark dark:text-white bg-white border border-gray-200 hover:bg-lightGrayish focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-lightDark  dark:border-gray-600 dark:hover:bg-dark',
      },
      size: {
        default: 'px-6 py-3 me-2 mb-2',
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    },
  }
);
interface BtnProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof btnVariants> {
  className: string;
}

const Btn = forwardRef<HTMLButtonElement, BtnProps>(
  ({ className, size, variant, ...props }, ref) => (
    <button
      className={cn(btnVariants({ variant, size, className }))}
      type="button"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      ref={ref}
    />
  )
);

export default Btn;
