import type { SwitchRootProps } from '@primereact/types/shared/switch';
import { cn } from '@/components/ui/utils';
import { Switch as SwitchPrime } from 'primereact/switch';
import * as React from 'react';

function Switch({ className, invalid, children, ...props }: SwitchRootProps & { children?: React.ReactNode }) {
    return (
        <SwitchPrime.Root
            className={cn('relative inline-block w-9 h-5.5', className)}
            inputClassName="peer cursor-pointer disabled:cursor-default appearance-none absolute top-0 start-0 w-full h-full m-0 p-0 opacity-0 z-10 rounded-full"
            aria-invalid={invalid}
            {...props}
        >
            <SwitchPrime.Control
                aria-invalid={invalid}
                className="inline-block size-full rounded-full shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] border border-transparent bg-surface-300 dark:bg-surface-700 transition-colors duration-200 peer-hover:bg-surface-400 dark:peer-hover:bg-surface-600 data-checked:bg-primary peer-hover:data-checked:bg-primary-emphasis aria-invalid:border-red-400 dark:aria-invalid:border-red-300 data-disabled:bg-surface-200 dark:data-disabled:bg-surface-600 peer-focus-visible:outline-1 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary"
            >
                <SwitchPrime.Thumb
                    className="absolute top-1/2 -translate-y-1/2 left-0 translate-x-1 data-checked:translate-x-4.5 size-3.5 flex justify-center items-center bg-surface-0 dark:bg-surface-400 text-surface-500 dark:text-surface-900 rounded-full transition-[background,color,translate] duration-200 data-checked:bg-surface-0 dark:data-checked:bg-surface-900 data-checked:text-primary data-disabled:bg-surface-700 dark:data-disabled:bg-surface-900"
                    children={children}
                />
            </SwitchPrime.Control>
        </SwitchPrime.Root>
    );
}

export { Switch };
