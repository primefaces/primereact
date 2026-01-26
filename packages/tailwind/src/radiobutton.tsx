import { cn } from '@/components/ui/utils';
import { RadioButtonRootProps } from '@primereact/types/shared/radiobutton';
import { RadioButtonGroupProps } from '@primereact/types/shared/radiobuttongroup';
import { cva, VariantProps } from 'class-variance-authority';
import { RadioButton as PRRadioButton } from 'primereact/radiobutton';
import { RadioButtonGroup as PRRadioButtonGroup } from 'primereact/radiobuttongroup';
import * as React from 'react';

const radioButtonVariants = cva(
    `
        relative inline-flex items-center justify-center select-none rounded-full overflow-hidden
        border border-surface-300 dark:border-surface-700 
        has-[input:hover]:border-surface-400 dark:has-[input:hover]:border-surface-600
        data-checked:border-primary data-checked:bg-primary
        has-[input:hover]:data-checked:bg-primary-emphasis   has-[input:hover]:data-checked:border-primary-emphasis
        has-[input:focus-visible]:outline-1 has-[input:focus-visible]:outline-offset-2 has-[input:focus-visible]:outline-primary has-[input:focus-visible]:outline 
        data-invalid:border-red-400 dark:data-invalid:border-red-300
        data-disabled:bg-surface-200 dark:data-disabled:bg-surface-400 data-disabled:border-surface-300 dark:data-disabled:border-surface-700 data-disabled:pointer-events-none
        shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] transition-colors duration-200
    `,
    {
        variants: {
            variant: {
                outlined: 'bg-surface-0 dark:bg-surface-950',
                filled: 'bg-surface-50 dark:bg-surface-800'
            },
            size: {
                small: 'size-3.5 *:data-[part=indicator]:size-2',
                normal: 'size-4.5 *:data-[part=indicator]:size-2.5',
                large: 'size-5 *:data-[part=indicator]:size-3'
            }
        },
        defaultVariants: {
            variant: 'outlined',
            size: 'normal'
        }
    }
);

function RadioButton({ className, size, variant, ...props }: RadioButtonRootProps & VariantProps<typeof radioButtonVariants>) {
    return (
        <PRRadioButton.Root
            className={cn(radioButtonVariants({ size, variant, className }))}
            inputClassName="peer cursor-pointer disabled:cursor-default appearance-none absolute start-0 top-0 w-full h-full m-0 p-0 opacity-0 z-10
        border border-transparent rounded-full"
            {...props}
        >
            <PRRadioButton.Indicator
                className={`
                    bg-transparent text-xs rounded-full
                    transition-[background-color,scale] will-change-transform duration-200 backface-hidden scale-[0.1] 
                    data-checked:bg-primary-contrast data-checked:visible data-checked:scale-100
                    data-disabled:bg-surface-700 dark:data-disabled:bg-surface-400
                `}
            />
        </PRRadioButton.Root>
    );
}

const radioButtonGroupVariants = cva('flex flex-wrap', {
    variants: {
        orientation: {
            horizontal: 'gap-4',
            vertical: 'flex-col gap-2'
        }
    },
    defaultVariants: {
        orientation: 'horizontal'
    }
});

function RadioButtonGroup({ className, orientation = 'horizontal', ...props }: RadioButtonGroupProps & VariantProps<typeof radioButtonGroupVariants>) {
    return <PRRadioButtonGroup data-orientation={orientation} className={cn(radioButtonGroupVariants({ orientation, className }))} {...props} />;
}

export { RadioButton, RadioButtonGroup, radioButtonVariants };
