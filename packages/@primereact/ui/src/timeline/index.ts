export * as Timeline from './UITimeline.parts';

// Named runtime exports to maximize tree-shaking
export {
    defaultConnectorProps,
    defaultContentProps,
    defaultEventProps,
    defaultMarkerProps,
    defaultOppositeProps,
    defaultRootProps,
    defaultSeparatorProps,
    TimelineConnector,
    TimelineContent,
    TimelineEvent,
    TimelineMarker,
    TimelineOpposite,
    TimelineProps,
    TimelineProvider,
    TimelineSeparator,
    useTimelineContext
} from 'primereact/timeline';
export { UITimelineRoot as TimelineRoot } from './root';
