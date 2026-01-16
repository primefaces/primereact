'use client';
import type { AutoCompleteCompleteEvent, AutoCompleteValueChangeEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import * as React from 'react';
import { Avatar } from '@primereact/ui/avatar';
import { Tag } from '@primereact/ui/tag';

interface User {
    id: number;
    username: string;
    name: string;
    role: string;
    avatar: string;
    online: boolean;
}

const users: User[] = [
    { id: 1, username: 'sarah_chen', name: 'Sarah Chen', role: 'Admin', avatar: 'SC', online: true },
    { id: 2, username: 'alex_dev', name: 'Alex Rivera', role: 'Developer', avatar: 'AR', online: true },
    { id: 3, username: 'jordan_ux', name: 'Jordan Kim', role: 'Designer', avatar: 'JK', online: false },
    { id: 4, username: 'taylor_pm', name: 'Taylor Swift', role: 'PM', avatar: 'TS', online: true },
    { id: 5, username: 'morgan_ops', name: 'Morgan Lee', role: 'DevOps', avatar: 'ML', online: false },
    { id: 6, username: 'casey_qa', name: 'Casey Jones', role: 'QA', avatar: 'CJ', online: true },
    { id: 7, username: 'riley_data', name: 'Riley Brown', role: 'Data Analyst', avatar: 'RB', online: false },
    { id: 8, username: 'quinn_sec', name: 'Quinn Adams', role: 'Security', avatar: 'QA', online: true }
];

export default function OptionDemo() {
    const [query, setQuery] = React.useState<string>('');
    const [filteredUsers, setFilteredUsers] = React.useState<User[]>([]);
    const [mentions, setMentions] = React.useState<User[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        const q = event.query.toLowerCase().replace('@', '');

        if (!q.trim()) {
            setFilteredUsers(users.filter((u) => !mentions.some((m) => m.id === u.id)));
        } else {
            setFilteredUsers(
                users.filter(
                    (u) => !mentions.some((m) => m.id === u.id) && (u.username.toLowerCase().includes(q) || u.name.toLowerCase().includes(q))
                )
            );
        }
    };

    const handleSelect = (e: AutoCompleteValueChangeEvent) => {
        const selectedName = e.value as string;
        const selected = filteredUsers.find((u) => u.name === selectedName);

        if (selected && !mentions.some((m) => m.id === selected.id)) {
            setMentions([...mentions, selected]);
        }

        setQuery('');
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root value={query} options={filteredUsers} optionLabel="name" onComplete={search} onValueChange={handleSelect}>
                <AutoComplete.Input placeholder="Type @ to mention" />

                <AutoComplete.Portal>
                    <AutoComplete.List>
                        <AutoComplete.Options style={{ maxHeight: '16rem' }}>
                            {filteredUsers.map((user, index) => (
                                <AutoComplete.Option key={user.id} index={index} uKey={String(user.id)}>
                                    <div className="flex items-center gap-3 py-1 w-full">
                                        <div className="relative">
                                            <Avatar.Root shape="circle" className="w-8 h-8">
                                                <Avatar.Fallback>{user.avatar}</Avatar.Fallback>
                                            </Avatar.Root>
                                            <span
                                                className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-surface-0 dark:border-surface-900 ${user.online ? 'bg-emerald-500' : 'bg-surface-400'}`}
                                            />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <div className="flex items-center justify-between gap-2">
                                                <span className="font-medium text-surface-900 dark:text-surface-0">{user.name}</span>
                                                <Tag.Root severity="info">
                                                    <Tag.Label>{user.role}</Tag.Label>
                                                </Tag.Root>
                                            </div>
                                            <span className="text-sm text-surface-500 dark:text-surface-400">@{user.username}</span>
                                        </div>
                                    </div>
                                </AutoComplete.Option>
                            ))}
                        </AutoComplete.Options>
                    </AutoComplete.List>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}
