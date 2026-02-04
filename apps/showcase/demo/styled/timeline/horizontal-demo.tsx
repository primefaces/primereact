import { Timeline } from '@primereact/ui/timeline';

export default function HorizontalDemo() {
    const events = ['2026', '2027', '2028', '2029'];

    return (
        <div className="flex flex-col gap-4">
            <Timeline.Root orientation="horizontal" align="top">
                {events.map((event, index) => (
                    <Timeline.Event key={index}>
                        <Timeline.Opposite />
                        <Timeline.Separator>
                            <Timeline.Marker />
                            {index !== events.length - 1 && <Timeline.Connector />}
                        </Timeline.Separator>
                        <Timeline.Content>{event}</Timeline.Content>
                    </Timeline.Event>
                ))}
            </Timeline.Root>
            <Timeline.Root orientation="horizontal" align="bottom">
                {events.map((event, index) => (
                    <Timeline.Event key={index}>
                        <Timeline.Opposite />
                        <Timeline.Separator>
                            <Timeline.Marker />
                            {index !== events.length - 1 && <Timeline.Connector />}
                        </Timeline.Separator>
                        <Timeline.Content>{event}</Timeline.Content>
                    </Timeline.Event>
                ))}
            </Timeline.Root>
            <Timeline.Root orientation="horizontal" align="alternate">
                {events.map((event, index) => (
                    <Timeline.Event key={index}>
                        <Timeline.Opposite>&nbsp;</Timeline.Opposite>
                        <Timeline.Separator>
                            <Timeline.Marker />
                            {index !== events.length - 1 && <Timeline.Connector />}
                        </Timeline.Separator>
                        <Timeline.Content>{event}</Timeline.Content>
                    </Timeline.Event>
                ))}
            </Timeline.Root>
        </div>
    );
}
