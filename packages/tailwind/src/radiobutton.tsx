import * as React from 'react';
import { RadioButton as PRRadioButton } from 'primereact/radiobutton';
import { RadioButtonGroupProps, RadioButtonRootProps } from '@primereact/types/shared/radiobutton';
import { cn } from '@/components/ui/utils';
import { cva, VariantProps } from 'class-variance-authority';

const radioButtonVariants = cva(
    'relative select-none inline-flex items-center justify-center rounded-full border border-surface-300 dark:border-surface-700 peer-enabled:peer-hover:border-surface-400 dark:peer-enabled:peer-hover:border-surface-600 data-checked:border-primary data-checked:bg-primary peer-hover:data-checked:bg-primary-emphasis peer-hover:data-checked:border-primary-emphasis peer-focus-visible:outline-1 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary peer-focus-visible:outline data-invalid:border-red-400 dark:data-invalid:border-red-300 data-disabled:bg-surface-200 dark:data-disabled:bg-surface-400 data-disabled:border-surface-300 dark:data-disabled:border-surface-700 shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] transition-colors duration-200',
    {
        variants: {
            variant: {
                outlined: 'bg-surface-0 dark:bg-surface-950',
                filled: 'bg-surface-50 dark:bg-surface-800'
            },
            size: {
                small: 'size-3',
                normal: 'size-4',
                large: 'size-5'
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
            <PRRadioButton.Indicator className="bg-transparent text-xs w-3 h-3 rounded-full transition-all duration-200 backface-hidden scale-[0.1] data-checked:bg-primary-contrast data-checked:visible data-checked:scale-100 data-disabled:bg-surface-700 dark:data-disabled:bg-surface-400 p-small:w-2 p-small:h-2 p-large:w-4 p-large:h-4" />
        </PRRadioButton.Root>
    );
}

function RadioButtonGroup({ ...props }: RadioButtonGroupProps) {
    return <PRRadioButton.Group {...props} />;
}

export { RadioButton, RadioButtonGroup };
