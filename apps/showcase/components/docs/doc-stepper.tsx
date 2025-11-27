'use client';

import { cn } from '@primeuix/utils';
import React from 'react';

export function DocStep({ children, className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div className={cn('flex gap-3 sm:gap-5 last:[&_[data-content=true]]:pb-0 [counter-increment:step]', className)} {...props}>
            <div className="flex flex-col items-center">
                <div className="size-8 sm:size-9 rounded-md bg-surface-100 dark:bg-surface-800 text-color border border-surface-200 dark:border-surface-700 flex items-center justify-center font-semibold sm:text-lg before:content-[counter(step)]"></div>
                <span className="flex-1 w-px bg-(--p-content-border-color)" />
            </div>
            <div className="flex-1 pb-10 [&>h3]:mt-0.5 sm:[&>h3]:mt-1 overflow-hidden" data-content="true">
                {children}
            </div>
        </div>
    );
}

export default function DocStepper({ children, className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div className={cn('mt-8 mb-4 [counter-reset:step]', className)} {...props}>
            {children}
        </div>
    );
}
