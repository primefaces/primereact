import type { ButtonProps } from '@primereact/types/shared/button';
import { cn } from '@primeuix/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ButtonRoot } from 'primereact/button';
import * as React from 'react';

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-[3px]",
    {
        variants: {
            variant: {
                default: '',
                link: 'hover:underline',
                text: '',
                outlined: ''
            },
            severity: {
                default: 'focus-visible:border-primary focus-visible:ring-primary-500/20 dark:focus-visible:ring-primary-500/30',
                secondary: 'focus-visible:ring-surface-500/20 dark:focus-visible:ring-surface-500/30',
                info: ' focus-visible:ring-blue-500/30',
                success: 'focus-visible:ring-green-500/30',
                warn: 'focus-visible:ring-amber-500/30',
                danger: 'focus-visible:ring-red-500/30',
                contrast: 'focus-visible:ring-surface-500/30',
                help: 'focus-visible:ring-purple-500/30'
            },
            raised: {
                true: 'shadow'
            },
            rounded: {
                true: 'rounded-full!'
            },
            iconOnly: {
                true: 'p-0'
            },
            size: {
                small: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
                normal: 'h-9 px-4 py-2 has-[>svg]:px-3',
                large: 'h-10.5 px-4 has-[>svg]:px-3'
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
                className: 'bg-primary hover:bg-primary-emphasis text-primary-contrast '
            },
            {
                variant: 'default',
                severity: 'secondary',
                className: 'bg-surface-100 hover:bg-surface-200 dark:bg-surface-800 dark:hover:bg-surface-700 '
            },
            {
                variant: 'default',
                severity: 'info',
                className: 'bg-blue-500 text-surface-0 hover:bg-blue-600'
            },
            {
                variant: 'default',
                severity: 'success',
                className: 'bg-green-500 text-surface-0 hover:bg-green-600'
            },
            {
                variant: 'default',
                severity: 'warn',
                className: 'bg-amber-500 text-surface-0 hover:bg-amber-600'
            },
            {
                variant: 'default',
                severity: 'danger',
                className: 'bg-red-500 text-surface-0 hover:bg-red-600'
            },
            {
                variant: 'default',
                severity: 'help',
                className: 'bg-purple-500 text-surface-0 hover:bg-purple-600'
            },
            {
                variant: 'default',
                severity: 'contrast',
                className: 'bg-surface-950 text-surface-0 hover:bg-surface-800 dark:bg-surface-0 dark:hover:bg-surface-200 dark:text-surface-950'
            },
            {
                variant: 'outlined',
                severity: 'default',
                className: 'border border-primary hover:bg-primary/10 text-primary'
            },
            {
                variant: 'outlined',
                severity: 'secondary',
                className: 'border border-surface-200 dark:border-surface-800 hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-500'
            },
            {
                variant: 'outlined',
                severity: 'info',
                className: 'border border-blue-500 hover:bg-blue-500/10 text-blue-500'
            },
            {
                variant: 'outlined',
                severity: 'success',
                className: 'border border-green-500 hover:bg-green-500/10 text-green-500'
            },
            {
                variant: 'outlined',
                severity: 'warn',
                className: 'border border-amber-500 hover:bg-amber-500/10 text-amber-500'
            },
            {
                variant: 'outlined',
                severity: 'danger',
                className: 'border border-red-500 hover:bg-red-500/10 text-red-500'
            },
            {
                variant: 'outlined',
                severity: 'contrast',
                className: 'border border-gray-500 hover:bg-gray-500/10 text-gray-500'
            },
            {
                variant: 'outlined',
                severity: 'help',
                className: 'border border-purple-500 hover:bg-purple-500/10 text-purple-500'
            },
            {
                variant: 'text',
                severity: 'default',
                className: 'text-primary hover:bg-primary/10'
            },
            {
                variant: 'text',
                severity: 'secondary',
                className: 'text-surface-500 hover:bg-surface-100 dark:text-surface-400 dark:hover:bg-surface-800'
            },
            {
                variant: 'text',
                severity: 'info',
                className: 'text-blue-500 hover:bg-blue-500/10'
            },
            {
                variant: 'text',
                severity: 'success',
                className: 'text-green-500 hover:bg-green-500/10'
            },
            {
                variant: 'text',
                severity: 'warn',
                className: 'text-amber-500 hover:bg-amber-500/10'
            },
            {
                variant: 'text',
                severity: 'danger',
                className: 'text-red-500 hover:bg-red-500/10'
            },
            {
                variant: 'text',
                severity: 'contrast',
                className: 'text-surface-950 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800'
            },
            {
                variant: 'text',
                severity: 'help',
                className: 'text-purple-500 hover:bg-purple-500/10'
            },
            {
                iconOnly: true,
                size: 'small',
                className: 'size-8'
            },
            {
                iconOnly: true,
                size: 'normal',
                className: 'size-9'
            },
            {
                iconOnly: true,
                size: 'large',
                className: 'size-10.5'
            }
        ]
    }
);

function Button({ className, variant, size, severity, raised, rounded, iconOnly, ...props }: ButtonProps & VariantProps<typeof buttonVariants>) {
    return <ButtonRoot className={cn(buttonVariants({ variant, size, severity, raised, rounded, iconOnly, className }))} {...props} />;
}

export { Button, buttonVariants };
