'use client';
import { Tag } from '@primeicons/react';
import type {
    InputTagsRootInstance,
    InputTagsRootValueChangeEvent,
    useInputTagsAddEvent,
    useInputTagsRemoveEvent
} from '@primereact/types/shared/inputtags';
import { InputTags } from '@primereact/ui/inputtags';
import * as React from 'react';

export default function EventsDemo() {
    const [tags, setTags] = React.useState<string[]>([]);
    const [log, setLog] = React.useState<string[]>([]);

    const onAdd = (e: useInputTagsAddEvent) => {
        setLog((prev) => [`Added: "${e.value}"`, ...prev].slice(0, 5));
    };

    const onRemove = (e: useInputTagsRemoveEvent) => {
        setLog((prev) => [`Removed: "${e.value}" at index ${e.index}`, ...prev].slice(0, 5));
    };

    return (
        <div className="flex flex-col gap-4">
            <InputTags.Root
                value={tags}
                onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])}
                onAdd={onAdd}
                onRemove={onRemove}
            >
                {(instance: InputTagsRootInstance) => {
                    return (
                        <>
                            {instance?.state.value.map((value, index) => (
                                <InputTags.Item key={`${value}_${index}`} index={index} />
                            ))}
                            <InputTags.Input placeholder="Add tags and watch the event log..." />
                        </>
                    );
                }}
            </InputTags.Root>
            {log.length > 0 && (
                <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-surface-500 dark:text-surface-400 flex items-center gap-2">
                        <Tag size={14} />
                        Event Log
                    </span>
                    <ul className="list-none p-0 m-0 flex flex-col gap-1">
                        {log.map((entry, i) => (
                            <li key={`${entry}_${i}`} className="text-sm text-surface-600 dark:text-surface-300 font-mono">
                                {entry}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
