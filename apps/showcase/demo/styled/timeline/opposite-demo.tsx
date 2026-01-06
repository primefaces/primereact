'use client';

import { Timeline } from 'primereact/timeline';

export default function OppositeDemo() {
    const events = [
        { status: 'Ordered', date: '15/10/2020 10:30' },
        { status: 'Processing', date: '15/10/2020 14:00' },
        { status: 'Shipped', date: '15/10/2020 16:15' },
        { status: 'Delivered', date: '16/10/2020 10:00' }
    ];

    return (
        <div>
            <Timeline.Root>
                {events.map((event, index) => (
                    <Timeline.Event key={index}>
                        <Timeline.Opposite>
                            <small className="text-surface-500 dark:text-surface-400">{event.date}</small>
                        </Timeline.Opposite>
                        <Timeline.Separator>
                            <Timeline.Marker />
                            {index !== events.length - 1 && <Timeline.Connector />}
                        </Timeline.Separator>
                        <Timeline.Content>{event.status}</Timeline.Content>
                    </Timeline.Event>
                ))}
            </Timeline.Root>
        </div>
    );
}
