'use client';
import type { AutoCompleteCompleteEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import { Avatar } from '@primereact/ui/avatar';
import * as React from 'react';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    avatar: string;
    status: 'online' | 'away' | 'offline';
    statusClass: string;
}

const teamMembers: TeamMember[] = [
    { id: 1, name: 'Sarah Chen', role: 'Engineering Lead', avatar: 'SC', status: 'online', statusClass: 'bg-green-400' },
    { id: 2, name: 'Alex Rivera', role: 'Senior Developer', avatar: 'AR', status: 'online', statusClass: 'bg-green-400' },
    { id: 3, name: 'Jordan Kim', role: 'UX Designer', avatar: 'JK', status: 'away', statusClass: 'bg-amber-400' },
    { id: 4, name: 'Taylor Morgan', role: 'Product Manager', avatar: 'TM', status: 'offline', statusClass: 'bg-zinc-400' },
    { id: 5, name: 'Morgan Lee', role: 'DevOps Engineer', avatar: 'ML', status: 'online', statusClass: 'bg-green-400' },
    { id: 6, name: 'Casey Jones', role: 'QA Engineer', avatar: 'CJ', status: 'away', statusClass: 'bg-amber-400' }
];

export default function OptionDemo() {
    const [filteredMembers, setFilteredMembers] = React.useState<TeamMember[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        const query = event.query.toLowerCase();

        setFilteredMembers(
            query ? teamMembers.filter((m) => m.name.toLowerCase().includes(query) || m.role.toLowerCase().includes(query)) : [...teamMembers]
        );
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={filteredMembers} optionLabel="name" onComplete={search} className="w-full md:w-56">
                <AutoComplete.Value placeholder="Search team members..." className="w-full" />

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Panel>
                            <AutoComplete.List>
                                <AutoComplete.Options style={{ maxHeight: '16rem' }}>
                                    {filteredMembers.map((member, index) => (
                                        <AutoComplete.Option key={member.id} index={index} uKey={String(member.id)}>
                                            <div className="flex items-center gap-3 py-1">
                                                <div className="relative">
                                                    <Avatar.Root shape="circle" className="w-8 h-8">
                                                        <Avatar.Fallback>{member.avatar}</Avatar.Fallback>
                                                    </Avatar.Root>
                                                    <span
                                                        className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-surface-0 dark:border-surface-900 ${member.statusClass}`}
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-surface-900 dark:text-surface-0">{member.name}</span>
                                                    <span className="text-xs text-surface-500 dark:text-surface-400">{member.role}</span>
                                                </div>
                                            </div>
                                        </AutoComplete.Option>
                                    ))}
                                </AutoComplete.Options>
                                <AutoComplete.Empty className="text-sm">No members found</AutoComplete.Empty>
                            </AutoComplete.List>
                        </AutoComplete.Panel>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}
