'use client';
import { CommandMenu } from 'primereact/commandmenu';
import * as React from 'react';
import { cmds } from './cmds';

export default function BasicDemo() {
    const [search, setSearch] = React.useState('');

    return (
        <CommandMenu.Root>
            <div className="border-b border-surface-200 dark:border-surface-700/50 px-4 py-2">
                <CommandMenu.Input value={search} onValueChange={(val: string) => setSearch(val)} placeholder="Search for commands..." />
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
                                <div className={`w-5 h-5 rounded-md ${item.color} flex items-center justify-center text-white`}>
                                    <i className={`pi ${item.icon} text-xs font-bold`}></i>
                                </div>
                                <span>{item.label}</span>
                                <span className="opacity-50 ml-auto">{item.category}</span>
                            </CommandMenu.Item>
                        ))}
                    </CommandMenu.Group>
                ))}
                <CommandMenu.Item value="test">Test</CommandMenu.Item>
            </CommandMenu.List>
        </CommandMenu.Root>
    );
}

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
