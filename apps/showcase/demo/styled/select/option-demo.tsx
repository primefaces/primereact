'use client';

import type { SelectOptionInstance, SelectValueChangeEvent } from '@primereact/types/shared/select';
import { ChevronDownIcon } from '@primereact/icons';
import { Select } from '@primereact/ui/select';
import * as React from 'react';
import { Avatar } from '@primereact/ui/avatar';

const teamMembers = [
    { id: 1, name: 'Sarah Chen', role: 'Engineering Lead', avatar: 'SC', status: 'away', className: 'bg-amber-400' },
    { id: 2, name: 'Alex Rivera', role: 'Senior Developer', avatar: 'AR', status: 'online', className: 'bg-green-400' },
    { id: 3, name: 'Jordan Kim', role: 'UX Designer', avatar: 'JK', status: 'away', className: 'bg-amber-400' },
    { id: 4, name: 'Taylor Morgan', role: 'Product Manager', avatar: 'TM', status: 'offline', className: 'bg-zinc-400' },
    { id: 5, name: 'Morgan Lee', role: 'DevOps Engineer', avatar: 'ML', status: 'online', className: 'bg-green-400' },
    { id: 6, name: 'Casey Jones', role: 'QA Engineer', avatar: 'CJ', status: 'busy', className: 'bg-red-400' }
];

type TeamMember = (typeof teamMembers)[number] | null;

export default function OptionDemo() {
    const [assignee, setAssignee] = React.useState<TeamMember>(null);

    return (
        <div className="flex justify-center">
            <Select.Root
                value={assignee}
                onValueChange={(e: SelectValueChangeEvent) => setAssignee(e.value as TeamMember)}
                options={teamMembers}
                optionLabel="name"
                className="w-full md:w-56"
            >
                <Select.Trigger>
                    {assignee ? (
                        <span className="flex items-center gap-2">
                            <span className={`inline-block w-2 h-2 rounded-full ${assignee.className}`} />
                            <span>{assignee.name}</span>
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
                                                        className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 ${selected ? 'border-primary-emphasis' : 'border-surface-0 dark:border-surface-900'} ${member.className}`}
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
