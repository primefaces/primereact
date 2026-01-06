'use client';
import { useHotKey } from '@primereact/hooks';
import { DialogChangeEvent, DialogContentInstance } from '@primereact/types/shared/dialog';
import { CommandMenu } from 'primereact/commandmenu';
import { Dialog } from 'primereact/dialog';
import * as React from 'react';
import { cmds } from './cmds';

const commands = [
    {
        group: 'recents',
        items: [
            {
                icon: 'pi-refresh',
                label: 'Check For Updates',
                category: 'Command',
                color: 'bg-[linear-gradient(rgb(245,83,84),rgb(235,70,70))]',
                value: 'check for updates',
                keywords: ['check', 'updates']
            },
            {
                icon: 'pi-cog',
                label: 'Open Settings',
                category: 'Command',
                color: 'bg-[linear-gradient(rgb(96,165,250),rgb(59,130,246))]',
                value: 'open settings'
            },
            {
                icon: 'pi-search',
                label: 'Search Files',
                category: 'Command',
                color: 'bg-[linear-gradient(rgb(167,139,250),rgb(139,92,246))]',
                value: 'search files'
            },
            {
                icon: 'pi-terminal',
                label: 'Open Terminal',
                category: 'View',
                color: 'bg-[linear-gradient(rgb(148,163,184),rgb(100,116,139))]',
                value: 'open terminal'
            },
            {
                icon: 'pi-history',
                label: 'View History',
                category: 'View',
                color: 'bg-[linear-gradient(rgb(192,132,252),rgb(168,85,247))]',
                value: 'view history',
                keywords: ['history', 'recent']
            },
            {
                icon: 'pi-comments',
                label: 'Open Chat',
                category: 'Communication',
                color: 'bg-[linear-gradient(rgb(34,211,238),rgb(6,182,212))]',
                value: 'open chat'
            }
        ]
    },
    ...cmds
];

export default function BasicDemo() {
    const [search, setSearch] = React.useState('');
    const [open, setOpen] = React.useState(false);

    useHotKey('meta+k', () => setOpen(true));

    return (
        <div className="flex items-center justify-center py-8">
            <div className="flex items-center gap-2">
                Press{' '}
                <kbd className="bg-surface-100 dark:bg-surface-950 px-2 py-1 rounded-md border border-surface-200 dark:border-surface-700/50 text-sm">
                    CTRL/⌘ + K
                </kbd>
            </div>
            <Dialog.Root open={open} onOpenChange={(e: DialogChangeEvent) => setOpen(e.value as boolean)} modal dismissableMask>
                <Dialog.Portal>
                    <Dialog.Content unstyled className="bg-none p-0 border-none sm:min-w-[520px] w-full">
                        {(instance: DialogContentInstance) => {
                            const { dialog } = instance;

                            return (
                                <CommandMenu.Root className=" border-none">
                                    <div className="border-b border-surface-200 dark:border-surface-700/50 px-4 py-2 flex items-center gap-2">
                                        <CommandMenu.Input
                                            className="flex-1"
                                            value={search}
                                            onValueChange={(val: string) => setSearch(val)}
                                            placeholder="Search for commands..."
                                        />
                                        <kbd
                                            onClick={dialog?.close}
                                            className="cursor-pointer hover:bg-surface-100 dark:hover:bg-surface-900 px-2 py-1 rounded-md border border-surface-200 dark:border-surface-700/50 text-xs"
                                        >
                                            ESC
                                        </kbd>
                                    </div>
                                    <CommandMenu.List>
                                        <CommandMenu.Empty>
                                            No results found for <span className="text-surface-900 dark:text-surface-0">&quot;{search}&quot;</span>
                                        </CommandMenu.Empty>
                                        {commands.map((group) => (
                                            <CommandMenu.Group key={group.group} value={group.group}>
                                                <CommandMenu.GroupHeading>{group.group}</CommandMenu.GroupHeading>
                                                {group.items.map((item, index) => (
                                                    <CommandMenu.Item key={index} value={item.value}>
                                                        <div
                                                            className={`w-5 h-5 rounded-md ${item.color} flex items-center justify-center text-white`}
                                                        >
                                                            <i className={`pi ${item.icon} text-xs font-bold`}></i>
                                                        </div>
                                                        <span>{item.label}</span>
                                                        <span className="opacity-50 ml-auto">{item.category}</span>
                                                    </CommandMenu.Item>
                                                ))}
                                            </CommandMenu.Group>
                                        ))}
                                    </CommandMenu.List>
                                </CommandMenu.Root>
                            );
                        }}
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}
