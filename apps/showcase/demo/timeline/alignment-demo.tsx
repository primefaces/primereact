import { Timeline } from 'primereact/timeline';

export default function AlignmentDemo() {
    const events = [{ status: 'Ordered' }, { status: 'Processing' }, { status: 'Shipped' }, { status: 'Delivered' }];

    return (
        <div className="card flex flex-wrap gap-12">
            <Timeline className="w-full md:w-80">
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
            <Timeline align="right" className="w-full md:w-80">
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
            <Timeline align="alternate" className="w-full md:w-80">
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
        </div>
    );
}
