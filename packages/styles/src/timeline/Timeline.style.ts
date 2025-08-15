import { createStyles } from '@primereact/styles/utils';
import type { TimelineInstance } from '@primereact/types/shared/timeline';
import { style } from '@primeuix/styles/timeline';

export const styles = createStyles<TimelineInstance>({
    name: 'timeline',
    style,
    classes: {
        root: ({ props }) => ['p-timeline p-component', 'p-timeline-' + props.align, 'p-timeline-' + props.orientation],
        event: 'p-timeline-event',
        opposite: 'p-timeline-event-opposite',
        separator: 'p-timeline-event-separator',
        marker: 'p-timeline-event-marker',
        connector: 'p-timeline-event-connector',
        content: 'p-timeline-event-content'
    }
});
