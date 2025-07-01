import { cn } from '@primeuix/utils';
import React from 'react';

const DocLinkCard: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ children, target = '_blank', rel = 'noopener noreferrer', ...props }) => {
    return (
        <a
            className={cn(
                'cursor-pointer bg-gradient-to-b from-surface-0 to-surface-50 dark:from-surface-700/75 dark:to-surface-800 flex flex-col gap-4 border dark:border-0 border-surface-200 dark:border-surface-800/0 rounded-lg p-6 pb-8 shadow-[0_-8px_0px_0_color-mix(in_srgb,var(--color-surface-900)_8%,transparent)_inset] dark:shadow-[0_-8px_0px_0_color-mix(in_srgb,var(--color-surface-950)_48%,transparent)_inset] hover:opacity-75 transition-opacity duration-150 ',
                props.className
            )}
            target={target}
            rel={rel}
            {...props}
        >
            {children}
        </a>
    );
};

export default DocLinkCard;
