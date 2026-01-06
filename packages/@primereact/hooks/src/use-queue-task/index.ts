import * as React from 'react';

export const useQueueTask = () => {
    const tasksRef = React.useRef(new Map<string | number, () => void>());
    const scheduledRef = React.useRef(false);

    const flush = React.useCallback(() => {
        scheduledRef.current = false;
        const tasks = tasksRef.current;

        tasksRef.current = new Map();
        tasks.forEach((task) => task());
    }, []);

    return React.useCallback(
        (id: string | number, task: () => void) => {
            tasksRef.current.set(id, task);

            if (!scheduledRef.current) {
                scheduledRef.current = true;
                queueMicrotask(flush);
            }
        },
        [flush]
    );
};
