'use client';
import { cn } from '@/components/ui/utils';
import { CheckIcon } from '@primereact/icons/check';
import { MinusIcon } from '@primereact/icons/minus';
import { CheckboxRootProps } from '@primereact/types/shared/checkbox';
import { cva } from 'class-variance-authority';
import { Checkbox as PRCheckbox } from 'primereact/checkbox';
import * as React from 'react';

const checkboxVariants = cva(
    `
        relative inline-flex items-center justify-center select-none align-bottom
        rounded-sm border border-surface-300 dark:border-surface-700
        text-surface-700 dark:text-surface-0
        has-[input:hover]:border-surface-400 dark:has-[input:hover]:border-surface-600
        data-checked:border-primary data-checked:bg-primary data-checked:text-primary-contrast
        has-[input:hover]:data-checked:bg-primary-emphasis has-[input:hover]:data-checked:border-primary-emphasis
        has-[input:focus-visible]:outline-1 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-primary has-[input:focus-visible]:outline 
        data-invalid:border-red-400 dark:data-invalid:border-red-300
        shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] transition-colors duration-200
        data-disabled:pointer-events-none data-disabled:bg-surface-200 dark:data-disabled:bg-surface-700 data-disabled:border-surface-300 dark:data-disabled:border-surface-600 data-disabled:text-surface-700 dark:data-disabled:text-surface-400
    `,
    {
        variants: {
            variant: {
                outlined: 'bg-surface-0 dark:bg-surface-950',
                filled: 'bg-surface-50 dark:bg-surface-800'
            },
            size: {
                small: 'size-3.5 **:data-[scope=checkboxindicator]:size-2.5!',
                normal: 'size-4.5 **:data-[scope=checkboxindicator]:size-3.5!',
                large: 'size-5 **:data-[scope=checkboxindicator]:size-4!'
            }
        },
        defaultVariants: {
            size: 'normal',
            variant: 'outlined'
        }
    }
);

function Checkbox({ variant, size, className, ...props }: CheckboxRootProps) {
    return (
        <PRCheckbox.Root
            className={cn(checkboxVariants({ size, variant, className }))}
            inputClassName="peer cursor-pointer disabled:cursor-default appearance-none 
        absolute start-0 top-0 w-full h-full m-0 p-0 opacity-0 z-10
        border border-transparent rounded-xs"
            {...props}
        >
            <PRCheckbox.Indicator className="data-checked:block! hidden!" as={CheckIcon} />
            <PRCheckbox.Indicator className="data-indeterminate:data-unchecked:block! hidden!" as={MinusIcon} />
        </PRCheckbox.Root>
    );
}

export { Checkbox };
