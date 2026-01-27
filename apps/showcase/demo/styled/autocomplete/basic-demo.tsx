'use client';
import type { AutoCompleteCompleteEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import * as React from 'react';

interface Command {
    label: string;
    shortcut: string;
}

const commands: Command[] = [
    { label: 'New File', shortcut: '⌘N' },
    { label: 'Open File', shortcut: '⌘O' },
    { label: 'Save', shortcut: '⌘S' },
    { label: 'Save As', shortcut: '⇧⌘S' },
    { label: 'Find', shortcut: '⌘F' },
    { label: 'Replace', shortcut: '⌘H' },
    { label: 'Go to Line', shortcut: '⌘G' },
    { label: 'Toggle Sidebar', shortcut: '⌘B' },
    { label: 'Split Editor', shortcut: '⌘\\' },
    { label: 'Close Tab', shortcut: '⌘W' }
];

export default function BasicDemo() {
    const [filteredCommands, setFilteredCommands] = React.useState<Command[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        const query = event.query.toLowerCase();

        setFilteredCommands(query ? commands.filter((cmd) => cmd.label.toLowerCase().includes(query)) : [...commands]);
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={filteredCommands} optionLabel="label" onComplete={search}>
                <AutoComplete.Input placeholder="Type a command..." />

                <AutoComplete.Portal>
                    <AutoComplete.List>
                        <AutoComplete.Options style={{ maxHeight: '14rem' }}>
                            {filteredCommands.map((cmd, index) => (
                                <AutoComplete.Option key={cmd.label} index={index} uKey={cmd.label}>
                                    <div className="flex items-center justify-between w-full">
                                        <span>{cmd.label}</span>
                                        <kbd className="inline-flex items-center justify-center min-w-8 px-1.5 py-0.5 text-xs font-medium rounded bg-surface-100 dark:bg-surface-700 text-surface-600 dark:text-surface-300 border border-surface-200 dark:border-surface-600">
                                            {cmd.shortcut}
                                        </kbd>
                                    </div>
                                </AutoComplete.Option>
                            ))}
                        </AutoComplete.Options>
                        <AutoComplete.Empty className="text-sm">No commands found</AutoComplete.Empty>
                    </AutoComplete.List>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}
