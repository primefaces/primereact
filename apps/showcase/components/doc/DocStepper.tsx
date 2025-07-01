'use client';

import { cn } from '@primeuix/utils';
import React from 'react';

export const DocStep: React.FC<React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> & { stepIndex: number }> = ({ children, className, stepIndex, ...props }) => {
    return (
        <div className={cn('flex gap-3 sm:gap-5 last:[&_[data-content=true]]:pb-0', className)} data-step-index={stepIndex} {...props}>
            <div className="flex flex-col items-center">
                <div className="size-8 sm:size-9 rounded-md bg-surface-100 dark:bg-surface-800 text-color border border-surface-200 dark:border-surface-700 flex items-center justify-center font-semibold sm:text-lg">{stepIndex}</div>
                <span className="flex-1 w-px bg-(--p-content-border-color)" />
            </div>
            <div className="flex-1 pb-10 [&>h3]:mt-0.5 sm:[&>h3]:mt-1 overflow-hidden" data-content="true">
                {children}
            </div>
        </div>
    );
};

const DocStepper: React.FC<React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>> = ({ children, className, ...props }) => {
    const validSteps = React.Children.toArray(children).filter(Boolean);

    return (
        <div className={cn('mt-8 mb-4', className)} {...props}>
            {validSteps.map((child, i) => (React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<{ stepIndex?: number }>, { stepIndex: i + 1 }) : child))}
        </div>
    );
};

export default DocStepper;
