import type { SwitchProps } from '@primereact/types/shared/switch';
import { cn } from '@primeuix/utils';
import { Switch as SwitchPrime } from 'primereact/switch';
import * as React from 'react';

function Switch({ className, invalid, children, ...props }: SwitchProps & { children?: React.ReactNode }) {
    return (
        <SwitchPrime.Root
            className={cn(
                'peer group relative disabled:pointer-events-none disabled:opacity-60',
                '[&>input]:size-full [&>input]:whitespace-nowrap [&>input]:outline-none [&>input]:absolute [&>input]:top-0 [&>input]:left-0 [&>input]:opacity-0',
                className
            )}
            aria-invalid={invalid}
            {...props}
        >
            <SwitchPrime.Control
                aria-invalid={invalid}
                className={cn(
                    'w-10 h-6 border-2 border-transparent bg-surface-200 hover:bg-surface-300 dark:bg-surface-700 aria-invalid:bg-red-500/50 dark:hover:bg-surface-600 group-data-[p-checked=true]:bg-primary group-data-[p-checked=true]:hover:bg-primary-emphasis rounded-full transition-[background,box-shadow] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500/50 aria-invalid:focus-visible:outline-red-500'
                )}
            >
                <SwitchPrime.Thumb className={cn('h-full aspect-square group-data-[p-checked=true]:translate-x-[calc(100%-3px)] bg-primary-contrast rounded-full transition-[translate,width] pointer-events-none')} children={children} />
            </SwitchPrime.Control>
        </SwitchPrime.Root>
    );
}

export { Switch };
