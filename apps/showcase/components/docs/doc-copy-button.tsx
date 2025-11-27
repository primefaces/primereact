'use client';
import { cn } from '@primeuix/utils';
import * as React from 'react';

export default function DocCopyButton({ source, timeout = 2000, className, ...props }: React.ComponentProps<'button'> & { source: string; timeout?: number }) {
    const [isCopied, setIsCopied] = React.useState(false);

    const timeoutRef = React.useRef<NodeJS.Timeout>(null);

    function onCopy() {
        navigator.clipboard.writeText(source);

        setIsCopied(true);

        timeoutRef.current = setTimeout(() => {
            setIsCopied(false);
        }, timeout);
    }

    return (
        <button
            disabled={isCopied}
            onClick={onCopy}
            className={cn(
                'size-8 flex items-center justify-center rounded-md hover:text-surface-900 dark:hover:text-surface-0 hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-500 dark:text-surface-400 transition-colors disabled:pointer-events-none ',
                className
            )}
            {...props}
        >
            <i className={`pi ${isCopied ? 'pi-check' : 'pi-clone'}`}></i>
        </button>
    );
}
