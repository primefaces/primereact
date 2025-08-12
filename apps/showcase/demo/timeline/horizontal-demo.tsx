import { Timeline } from 'primereact/timeline';

export default function HorizontalDemo() {
    const events = ['2020', '2021', '2022', '2023'];

    return (
        <div className="card flex flex-col gap-4">
            <Timeline orientation="horizontal" align="top">
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
            </Timeline>
            <Timeline orientation="horizontal" align="bottom">
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
            </Timeline>
            <Timeline orientation="horizontal" align="alternate">
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
            </Timeline>
        </div>
    );
}
