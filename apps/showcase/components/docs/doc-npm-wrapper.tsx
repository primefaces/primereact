'use client';
import { cn } from '@primeuix/utils';
import React from 'react';
import DocCopyButton from './doc-copy-button';

interface Command {
    npm?: string;
    pnpm?: string;
    bun?: string;
    yarn?: string;
}

export default function DocNpmWrapper({
    commands,
    className,
    ...props
}: React.ComponentProps<'div'> & {
    commands?: Command;
}) {
    const [selectedCommand, setSelectedCommand] = React.useState<keyof Command>('npm');

    if (!commands) return;

    return (
        <div className={cn('', className)} {...props}>
            <div className="flex items-center justify-between gap-8 overflow-x-auto overflow-y-hidden border-b border-surface-200 dark:border-surface-800 p-1.5 bg-surface-100/50 dark:bg-surface-950/50">
                <div className="flex items-center gap-1 ">
                    {Object.keys(commands).map((item) =>
                        commands[item as keyof Command] ? (
                            <button
                                key={item}
                                onClick={() => {
                                    setSelectedCommand(item as keyof Command);
                                }}
                                data-selected={selectedCommand === item}
                                className="px-2 py-1 rounded-md hover:bg-surface-200/50 dark:hover:bg-surface-800 font-mono text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-300 transition-colors data-[selected=true]:bg-surface-200/50 data-[selected=true]:text-surface-950 dark:data-[selected=true]:bg-surface-800 dark:data-[selected=true]:text-surface-0 "
                            >
                                {item}
                            </button>
                        ) : null
                    )}
                </div>
                {commands[selectedCommand] && <DocCopyButton source={commands[selectedCommand]} />}
            </div>
            {commands[selectedCommand] && <div className="p-3.5 font-mono text-surface-800 dark:text-surface-100" dangerouslySetInnerHTML={{ __html: commands[selectedCommand] }} />}
        </div>
    );
}
