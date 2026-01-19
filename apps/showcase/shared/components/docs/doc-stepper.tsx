'use client';

import { cn } from '@primeuix/utils';
import React from 'react';

export function DocStep({ children, className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div className={cn('flex gap-2.5 sm:gap-4 last:[&_[data-content=true]]:pb-0 [counter-increment:step]', className)} {...props}>
            <div className="flex flex-col items-center">
                <div className="size-7 sm:size-8 rounded-md bg-surface-100 dark:bg-surface-900 text-color border border-surface-200 dark:border-surface-700 flex items-center justify-center font-medium font-mono text-sm sm:text-base before:content-[counter(step)]"></div>
                <span className="flex-1 w-px bg-(--p-content-border-color)" />
            </div>
            <div className="flex-1 pb-6 [&>h3]:mt-px sm:[&>h3]:mt-0.5 overflow-hidden" data-content="true">
                {children}
            </div>
        </div>
    );
}

export default function DocStepper({ children, className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div className={cn('mt-6 mb-3 [counter-reset:step]', className)} {...props}>
            {children}
        </div>
    );
}
