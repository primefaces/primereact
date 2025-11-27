'use client';

import { Timeline } from 'primereact/timeline';

export default function TimelinePTDemo() {
    const events = [{ status: 'Ordered' }, { status: 'Processing' }, { status: 'Shipped' }, { status: 'Delivered' }];

    return (
        <Timeline>
            {events.map((event, index) => (
                <Timeline.Event key={index}>
                    <Timeline.Opposite />
                    <Timeline.Separator>
                        <Timeline.Marker />
                        {index !== events.length - 1 && <Timeline.Connector />}
                    </Timeline.Separator>
                    <Timeline.Content>{event.status}</Timeline.Content>
                </Timeline.Event>
            ))}
        </Timeline>
    );
}
