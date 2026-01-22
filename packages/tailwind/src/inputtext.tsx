import type { InputTextProps } from '@primereact/types/shared/inputtext';
import { cn } from '@/components/ui/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { InputText as PRInputText } from 'primereact/inputtext';
import * as React from 'react';

const inputTextVariants = cva(
    'appearance-none rounded-md w-full outline-hidden bg-surface-0 dark:bg-surface-950 text-surface-700 dark:text-surface-0 placeholder:text-surface-500 dark:placeholder:text-surface-400 border border-surface-300 dark:border-surface-700 transition-colors duration-200 shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] disabled:bg-surface-200 disabled:text-surface-500 dark:disabled:bg-surface-700 dark:disabled:text-surface-400 aria-invalid:border-red-400 dark:aria-invalid:border-red-300 aria-invalid:placeholder:text-red-600 dark:aria-invalid:placeholder:text-red-400 hover:border-surface-400 dark:hover:border-surface-600 focus-visible:border-primary! file:font-medium',
    {
        variants: {
            variant: {
                filled: 'bg-surface-50 dark:bg-surface-800',
                outlined: ''
            },
            size: {
                small: 'py-1 px-2 text-xs',
                normal: 'py-1.5 px-2.5 text-sm',
                large: 'py-2 px-3'
            }
        },
        defaultVariants: {
            variant: 'outlined',
            size: 'normal'
        }
    }
);

function InputText({ className, size, variant, invalid, ...props }: InputTextProps & VariantProps<typeof inputTextVariants>) {
    return <PRInputText className={cn(inputTextVariants({ size, variant, className }))} {...props} aria-invalid={invalid} />;
}

export { InputText, inputTextVariants };
