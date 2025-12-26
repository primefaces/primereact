/*'use client';
import { ButtonProps as PrimeButtonProps } from '@primereact/types/shared/button';
import { cn } from '@primeuix/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Button as PrimeButton } from 'primereact/button';

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-surface-500 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                default:
                    'bg-teal-500 hover:bg-teal-700 active:bg-teal-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2 text-white text-lg font-bold',
                secondary:
                    'bg-secondary-500 hover:bg-secondary-700 active:bg-secondary-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2 text-white text-lg font-bold',
                success:
                    'bg-success-500 hover:bg-success-700 active:bg-success-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2 text-white text-lg font-bold',
                info: 'bg-info-500 hover:bg-info-700 active:bg-info-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2 text-white text-lg font-bold',
                warn: 'bg-warn-500 hover:bg-warn-700 active:bg-warn-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2 text-white text-lg font-bold',
                help: 'bg-help-500 hover:bg-help-700 active:bg-help-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2 text-white text-lg font-bold',
                danger: 'bg-danger-500 hover:bg-danger-700 active:bg-danger-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2 text-white text-lg font-bold',
                contrast:
                    'bg-contrast-500 hover:bg-contrast-700 active:bg-contrast-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2 text-white text-lg font-bold'
            },
            size: {
                default: 'py-2 px-4',
                sm: 'py-1 px-2',
                lg: 'py-3 px-6'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
);

export function Button({ className, variant, size, ...props }: PrimeButtonProps & VariantProps<typeof buttonVariants>) {
    return <PrimeButton className={cn(buttonVariants({ variant, size, className }))} {...props} unstyled />;
}
*/
