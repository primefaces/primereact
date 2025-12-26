'use client';
import { cn } from '@primeuix/utils';
import Link from 'next/link';
import * as React from 'react';

interface DocTabsContextType {
    activeTab: string | undefined;
    onActiveTabChange: (value: string | undefined) => void;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const DocTabsContext = React.createContext<DocTabsContextType | undefined>(undefined);

const useDocTabs = () => {
    const context = React.useContext(DocTabsContext);

    if (!context) {
        throw new Error('useDocTabs must be used within DocTabs');
    }

    return context;
};

function DocTabs({ value, size = 'lg', children }: { value?: string; size?: 'sm' | 'md' | 'lg' | 'xl'; children: React.ReactNode }) {
    const [activeTab, setActiveTab] = React.useState<string | undefined>(value);

    const onActiveTabChange = (value: string | undefined) => {
        setActiveTab(value);
    };

    return <DocTabsContext.Provider value={{ activeTab, onActiveTabChange, size }}>{children}</DocTabsContext.Provider>;
}

function DocTabsTab({
    value,
    className,
    as = 'button' as React.ElementType,
    ...props
}: React.ComponentProps<React.ElementType> & {
    value: string;
    as?: React.ElementType;
}) {
    const { activeTab, onActiveTabChange, size } = useDocTabs();

    const isActive = activeTab === value;

    const Component = as === 'Link' ? Link : as || 'button';

    return (
        <Component
            className={cn(
                'py-2 border-b border-transparent data-active:border-surface-800 dark:data-active:border-surface-200 text-surface-500 data-active:text-surface-800 dark:data-active:text-surface-200 hover:text-surface-700 dark:hover:text-surface-300 cursor-pointer transition-colors',
                size === 'sm' && 'text-sm',
                size === 'md' && 'text-base font-medium',
                size === 'lg' && 'text-lg font-medium',
                size === 'xl' && 'text-xl font-semibold',
                className
            )}
            onClick={() => onActiveTabChange(value)}
            {...props}
            {...(isActive && { 'data-active': '' })}
        />
    );
}

function DocTabsList({ className, ...props }: React.ComponentProps<'div'>) {
    return <div className={cn('flex gap-4', className)} {...props} />;
}

function DocTabsPanel({
    value,
    ...props
}: React.ComponentProps<'div'> & {
    value: string;
}) {
    const { activeTab } = useDocTabs();

    const isActive = activeTab === value;

    if (!isActive) return null;

    return <div {...props} {...(isActive && { 'data-active': '' })} />;
}

export { DocTabs, DocTabsList, DocTabsPanel, DocTabsTab };
