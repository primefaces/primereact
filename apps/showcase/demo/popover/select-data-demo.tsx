import { usePopoverOpenChangeEvent } from '@primereact/types/shared/popover';
import { Popover } from 'primereact/popover';
import React from 'react';

const members = [
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
];

function SelectDataDemo() {
    const [selectedMember, setSelectedMember] = React.useState<(typeof members)[0] | null>(members[0]);
    const [open, setOpen] = React.useState(false);

    return (
        <div className="card flex justify-center">
            <Popover open={open} onOpenChange={(e: usePopoverOpenChangeEvent) => setOpen(e.value)}>
                <Popover.Trigger className="min-w-48">{selectedMember?.name}</Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content>
                        <div className="flex flex-col gap-4">
                            <div>
                                <span className="font-medium block mb-2">Team Members</span>
                                <ul className="list-none p-0 m-0 flex flex-col">
                                    {members.map((member) => (
                                        <li
                                            key={member.name}
                                            className="flex items-center gap-2 px-2 py-3 hover:bg-emphasis cursor-pointer rounded-border"
                                            onClick={() => {
                                                setSelectedMember(member);
                                                setOpen(false);
                                            }}
                                        >
                                            <img
                                                src={`https://primefaces.org/cdn/primevue/images/avatar/${member.image}`}
                                                style={{ width: '32px' }}
                                            />
                                            <div>
                                                <span className="font-medium">{member.name}</span>
                                                <div className="text-sm text-surface-500 dark:text-surface-400">{member.email}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Popover.Content>
                </Popover.Portal>
            </Popover>
        </div>
    );
}

export default SelectDataDemo;
