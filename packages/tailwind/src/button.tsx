import type { ButtonProps } from '@primereact/types/shared/button';
import { cn } from '@/components/ui/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { Button as PRButton } from 'primereact/button';
import * as React from 'react';

const buttonVariants = cva(
    'inline-flex gap-2 cursor-pointer select-none items-center justify-center overflow-hidden relative rounded-md font-medium disabled:pointer-events-none disabled:opacity-60 transition-[background-color,color] duration-200 focus-visible:outline-1 focus-visible:outline-offset-2',
    {
        variants: {
            variant: {
                default: '',
                link: 'hover:underline',
                text: 'focus-visible:outline-offset-0!',
                outlined: ''
            },
            severity: {
                default: 'focus-visible:outline-primary',
                secondary: 'focus-visible:outline-surface-600 dark:focus-visible:outline-surface-300',
                info: ' focus-visible:outline-blue-500',
                success: 'focus-visible:outline-green-500',
                warn: 'focus-visible:outline-amber-500',
                danger: 'focus-visible:outline-red-500',
                contrast: 'focus-visible:outline-surface-950 dark:focus-visible:outline-surface-0',
                help: 'focus-visible:outline-violet-500'
            },
            raised: {
                true: 'shadow-sm'
            },
            rounded: {
                true: 'rounded-full!'
            },
            iconOnly: {
                true: 'p-0'
            },
            size: {
                small: "py-1 px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
                normal: "py-1.5 px-2.5 text-sm [&_svg:not([class*='size-'])]:size-3.5",
                large: "py-2 px-3 [&_svg:not([class*='size-'])]:size-4"
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'normal',
            severity: 'default',
            raised: false,
            rounded: false
        },
        compoundVariants: [
            {
                variant: 'default',
                severity: 'default',
                className: 'bg-primary hover:bg-primary-emphasis active:bg-primary-emphasis-alt text-primary-contrast'
            },
            {
                variant: 'default',
                severity: 'secondary',
                className:
                    'bg-surface-100 hover:bg-surface-200 active:bg-surface-300 text-surface-600 hover:text-surface-700 active:text-surface-800 dark:bg-surface-800 dark:hover:bg-surface-700 dark:active:bg-surface-600 dark:text-surface-300 dark:hover:text-surface-200 dark:active:text-surface-100'
            },
            {
                variant: 'default',
                severity: 'info',
                className: 'bg-blue-500 text-surface-0 hover:bg-blue-600 active:bg-blue-700'
            },
            {
                variant: 'default',
                severity: 'success',
                className: 'bg-green-500 text-surface-0 hover:bg-green-600 active:bg-green-700'
            },
            {
                variant: 'default',
                severity: 'warn',
                className: 'bg-amber-500 text-surface-0 hover:bg-amber-600 active:bg-amber-700'
            },
            {
                variant: 'default',
                severity: 'danger',
                className: 'bg-red-500 text-surface-0 hover:bg-red-600 active:bg-red-700'
            },
            {
                variant: 'default',
                severity: 'help',
                className: 'bg-violet-500 text-surface-0 hover:bg-violet-600 active:bg-violet-700'
            },
            {
                variant: 'default',
                severity: 'contrast',
                className: 'bg-surface-950 hover:bg-surface-900 active:bg-surface-800 text-white dark:bg-surface-0 dark:hover:bg-surface-100 dark:active:bg-surface-200 dark:text-surface-950'
            },
            {
                variant: 'outlined',
                severity: 'default',
                className: 'border border-primary-200 dark:border-primary-700 hover:bg-primary-50 active:bg-primary-100 dark:hover:bg-primary/5 dark:active:bg-primary/15 text-primary'
            },
            {
                variant: 'outlined',
                severity: 'secondary',
                className: 'border border-surface-200 dark:border-surface-700 hover:bg-surface-50 active:bg-surface-100 dark:hover:bg-white/5 dark:active:bg-white/15 text-surface-500 dark:text-surface-400'
            },
            {
                variant: 'outlined',
                severity: 'info',
                className: 'border border-blue-200 dark:border-blue-700 hover:bg-blue-500/10 active:bg-blue-500/20 text-blue-500'
            },
            {
                variant: 'outlined',
                severity: 'success',
                className: 'border border-green-200 dark:border-green-700 hover:bg-green-500/10 active:bg-green-500/20 text-green-500'
            },
            {
                variant: 'outlined',
                severity: 'warn',
                className: 'border border-amber-200 dark:border-amber-700 hover:bg-amber-500/10 active:bg-amber-500/20 text-amber-500'
            },
            {
                variant: 'outlined',
                severity: 'danger',
                className: 'border border-red-200 dark:border-red-700 hover:bg-red-500/10 active:bg-red-500/20 text-red-500'
            },
            {
                variant: 'outlined',
                severity: 'help',
                className: 'border border-violet-200 dark:border-violet-700 hover:bg-violet-500/10 active:bg-violet-500/20 text-violet-500'
            },
            {
                variant: 'outlined',
                severity: 'contrast',
                className: 'border border-surface-700 dark:border-surface-500 hover:bg-surface-50 active:bg-surface-100 text-surface-950 dark:text-surface-0 dark:hover:bg-surface-800 dark:active:bg-surface-700'
            },
            {
                variant: 'text',
                severity: 'default',
                className: 'hover:bg-primary-50 active:bg-primary-100 dark:hover:bg-primary/5 dark:active:bg-primary/15 text-primary'
            },
            {
                variant: 'text',
                severity: 'secondary',
                className: 'hover:bg-surface-50 active:bg-surface-100 dark:hover:bg-surface-800 dark:active:bg-surface-700 text-surface-500 dark:text-surface-400'
            },
            {
                variant: 'text',
                severity: 'info',
                className: 'text-blue-500 hover:bg-blue-500/10 active:bg-blue-500/20'
            },
            {
                variant: 'text',
                severity: 'success',
                className: 'text-green-500 hover:bg-green-500/10 active:bg-green-500/20'
            },
            {
                variant: 'text',
                severity: 'warn',
                className: 'text-amber-500 hover:bg-amber-500/10 active:bg-amber-500/20'
            },
            {
                variant: 'text',
                severity: 'danger',
                className: 'text-red-500 hover:bg-red-500/10 active:bg-red-500/20'
            },
            {
                variant: 'text',
                severity: 'help',
                className: 'text-violet-500 hover:bg-violet-500/10 active:bg-violet-500/20'
            },
            {
                variant: 'text',
                severity: 'contrast',
                className: 'hover:bg-surface-50 active:bg-surface-100 dark:hover:bg-surface-800 dark:active:bg-surface-700 text-surface-950 dark:text-surface-0'
            },
            {
                iconOnly: true,
                size: 'small',
                className: 'size-7'
            },
            {
                iconOnly: true,
                size: 'normal',
                className: 'size-[35px]'
            },
            {
                iconOnly: true,
                size: 'large',
                className: 'size-[42px]'
            }
        ]
    }
);

function Button({ className, variant, size, severity, raised, rounded, iconOnly, ...props }: ButtonProps & VariantProps<typeof buttonVariants>) {
    return <PRButton className={cn(buttonVariants({ variant, size, severity, raised, rounded, iconOnly, className }))} {...props} />;
}

export { Button, buttonVariants };
