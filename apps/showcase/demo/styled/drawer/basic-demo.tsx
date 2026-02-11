'use client';
import { Bars } from '@primeicons/react/bars';
import { Cog } from '@primeicons/react/cog';
import { Search } from '@primeicons/react/search';
import { Times } from '@primeicons/react/times';
import { Avatar } from '@primereact/ui/avatar';
import { Badge } from '@primereact/ui/badge';
import { Button } from '@primereact/ui/button';
import { Drawer } from '@primereact/ui/drawer';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

const navSections = [
    {
        label: 'MAIN',
        items: [
            { icon: 'pi pi-objects-column', label: 'Dashboard', badge: 3, active: true },
            { icon: 'pi pi-inbox', label: 'Inbox', badge: 12 },
            { icon: 'pi pi-calendar', label: 'Calendar' },
            { icon: 'pi pi-chart-bar', label: 'Analytics' }
        ]
    },
    {
        label: 'WORKSPACE',
        items: [
            { icon: 'pi pi-folder', label: 'Projects', badge: 5 },
            { icon: 'pi pi-users', label: 'Team' },
            { icon: 'pi pi-file', label: 'Documents' },
            { icon: 'pi pi-clipboard', label: 'Tasks' }
        ]
    }
];

const recentItems = [
    { color: 'bg-blue-500', label: 'Website Redesign', time: '2m ago' },
    { color: 'bg-green-500', label: 'API Integration', time: '1h ago' },
    { color: 'bg-orange-500', label: 'Mobile App v2', time: '3h ago' }
];

export default function BasicDemo() {
    const [search, setSearch] = React.useState('');

    return (
        <div className="flex justify-center">
            <Drawer.Root>
                <Drawer.Trigger iconOnly>
                    <Bars />
                </Drawer.Trigger>
                <Drawer.Backdrop />
                <Drawer.Portal className="w-full md:w-80">
                    <Drawer.Header>
                        <Drawer.Title>Drawer Title</Drawer.Title>
                        <Drawer.Close>
                            <Times />
                        </Drawer.Close>
                    </Drawer.Header>
                    <Drawer.Content pt={{ root: 'p-0' }}>
                        <div className="flex flex-col h-full">
                            {/* Search */}
                            <div className="px-4 pb-4">
                                <IconField.Root>
                                    <IconField.Icon>
                                        <Search />
                                    </IconField.Icon>
                                    <InputText
                                        value={search}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                                        placeholder="Search..."
                                        className="w-full"
                                    />
                                </IconField.Root>
                            </div>

                            {/* Navigation */}
                            <div className="flex-1 overflow-y-auto px-3">
                                {navSections.map((section) => (
                                    <div key={section.label} className="mb-4">
                                        <span className="text-xs font-semibold text-surface-500 dark:text-surface-400 px-3 mb-2 block tracking-wider">
                                            {section.label}
                                        </span>
                                        <ul className="list-none m-0 p-0">
                                            {section.items.map((item) => (
                                                <li key={item.label}>
                                                    <a
                                                        className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all mb-0.5 ${
                                                            item.active
                                                                ? 'bg-primary text-primary-contrast'
                                                                : 'text-surface-700 dark:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800'
                                                        }`}
                                                    >
                                                        <i className={`${item.icon} text-base`} />
                                                        <span className="font-medium text-sm">{item.label}</span>
                                                        {item.badge && (
                                                            <Badge
                                                                severity={item.active ? 'secondary' : undefined}
                                                                shape="circle"
                                                                className="ml-auto"
                                                            >
                                                                {item.badge}
                                                            </Badge>
                                                        )}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}

                                {/* Recent Activity */}
                                <div className="mb-4">
                                    <span className="text-xs font-semibold text-surface-500 dark:text-surface-400 px-3 mb-2 block tracking-wider">
                                        RECENT
                                    </span>
                                    <ul className="list-none m-0 p-0">
                                        {recentItems.map((item) => (
                                            <li key={item.label}>
                                                <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-surface-700 dark:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-800 transition-all mb-0.5">
                                                    <span className={`${item.color} w-2 h-2 rounded-full shrink-0`} />
                                                    <span className="font-medium text-sm truncate">{item.label}</span>
                                                    <span className="text-xs text-surface-400 ml-auto shrink-0">{item.time}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Drawer.Content>
                    <Drawer.Footer>
                        <div className="flex items-center gap-3 p-2 rounded-lg">
                            <Avatar.Root shape="circle" size="normal">
                                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                                <Avatar.Fallback>SA</Avatar.Fallback>
                            </Avatar.Root>
                            <div className="flex flex-col flex-1 min-w-0">
                                <span className="font-semibold text-sm truncate">Sarah Anderson</span>
                                <span className="text-xs text-surface-500 truncate">sarah@primetek.com</span>
                            </div>
                            <Button iconOnly variant="text" severity="secondary" size="small" rounded>
                                <Cog className="text-sm" />
                            </Button>
                        </div>
                    </Drawer.Footer>
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    );
}
