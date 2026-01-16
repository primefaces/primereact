'use client';

import type { SelectOptionInstance, SelectValueChangeEvent } from '@primereact/types/shared/select';
import { ChevronDownIcon } from '@primereact/icons';
import { Select } from '@primereact/ui/select';
import * as React from 'react';
import { Avatar } from '@primereact/ui/avatar';

const teamMembers = [
    { id: 1, name: 'Sarah Chen', role: 'Engineering Lead', avatar: 'SC', status: 'away' },
    { id: 2, name: 'Alex Rivera', role: 'Senior Developer', avatar: 'AR', status: 'online' },
    { id: 3, name: 'Jordan Kim', role: 'UX Designer', avatar: 'JK', status: 'away' },
    { id: 4, name: 'Taylor Morgan', role: 'Product Manager', avatar: 'TM', status: 'offline' },
    { id: 5, name: 'Morgan Lee', role: 'DevOps Engineer', avatar: 'ML', status: 'online' },
    { id: 6, name: 'Casey Jones', role: 'QA Engineer', avatar: 'CJ', status: 'busy' }
];

export default function OptionDemo() {
    const [assignee, setAssignee] = React.useState<number | null>(null);
    const selectedMember = teamMembers.find((m) => m.id === assignee);

    return (
        <div className="flex justify-center">
            <Select.Root
                value={assignee}
                onValueChange={(e: SelectValueChangeEvent) => setAssignee(e.value as number | null)}
                options={teamMembers}
                optionLabel="name"
                optionValue="id"
                className="w-full md:w-56"
            >
                <Select.Trigger>
                    {selectedMember ? (
                        <span className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-primary text-primary-contrast text-xs font-medium flex items-center justify-center">
                                {selectedMember.avatar}
                            </span>
                            <span>{selectedMember.name}</span>
                        </span>
                    ) : (
                        <span className="text-surface-400">Select team member...</span>
                    )}
                </Select.Trigger>
                <Select.Dropdown>
                    <ChevronDownIcon />
                </Select.Dropdown>
                <Select.Portal>
                    <Select.List>
                        <Select.Options style={{ maxHeight: '16rem' }}>
                            {teamMembers.map((member, index) => (
                                <Select.Option key={member.id} index={index} uKey={String(member.id)}>
                                    {(instance: SelectOptionInstance) => {
                                        const { selected } = instance;

                                        return (
                                            <div className="flex items-center gap-3 py-1">
                                                <div className="relative">
                                                    <Avatar.Root shape="circle" className="w-8 h-8">
                                                        <Avatar.Fallback>{member.avatar}</Avatar.Fallback>
                                                    </Avatar.Root>
                                                    <span
                                                        className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 ${selected ? 'border-primary-emphasis' : 'border-surface-0 dark:border-surface-900'} ${member.status === 'online' ? 'bg-green-400' : member.status === 'away' ? 'bg-amber-400' : member.status === 'busy' ? 'bg-red-400' : 'bg-zinc-400'}`}
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span
                                                        className={`font-medium ${selected ? 'text-primary-contrast' : 'text-surface-900 dark:text-surface-0'}`}
                                                    >
                                                        {member.name}
                                                    </span>
                                                    <span
                                                        className={`text-xs ${selected ? 'text-primary-contrast/70' : 'text-surface-500 dark:text-surface-400'}`}
                                                    >
                                                        {member.role}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    }}
                                </Select.Option>
                            ))}
                        </Select.Options>
                    </Select.List>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
