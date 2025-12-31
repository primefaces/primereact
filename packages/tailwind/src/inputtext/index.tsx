import type { InputTextProps } from '@primereact/types/shared/inputtext';
import { cn } from '@primeuix/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { InputText as InputTextPrime } from 'primereact/inputtext';
import * as React from 'react';

const inputTextVariants = cva(
    ' rounded-lg w-full min-w-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 focus-visible:ring-[3px] focus-visible:ring-primary-500/20 dark:focus-visible:ring-primary-500/30 aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/30 outline-none placeholder:text-surface-500 dark:placeholder:text-surface-400 aria-invalid:placeholder:text-red-500 dark:aria-invalid:placeholder:text-red-400 aria-invalid:text-red-500 dark:aria-invalid:text-red-400',
    {
        variants: {
            variant: {
                filled: 'bg-surface-100 dark:bg-surface-800 aria-invalid:bg-red-500/10 transition-[color,box-shadow]',
                outlined: 'bg-transparent border border-surface focus-visible:border-primary shadow-xs aria-invalid:border-red-500 transition-[color,box-shadow,border-color]'
            },
            size: {
                small: 'h-8 px-2.5 py-1 text-sm',
                normal: 'h-9 px-3 py-1.5 text-base',
                large: 'h-10.5 px-3.5 py-2 text-lg'
            }
        },
        defaultVariants: {
            variant: 'outlined',
            size: 'normal'
        }
    }
);

function InputText({ className, size, variant, invalid, ...props }: InputTextProps & VariantProps<typeof inputTextVariants>) {
    return <InputTextPrime className={cn(inputTextVariants({ size, variant, className }))} {...props} aria-invalid={invalid} />;
}

export { InputText, inputTextVariants };
