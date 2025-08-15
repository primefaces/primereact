import { createOptionalContext } from '@primereact/core/utils';
import type { TimelineMarkerInstance } from '@primereact/types/shared/timeline';

export const [TimelineMarkerProvider, useTimelineMarkerContext] = createOptionalContext<TimelineMarkerInstance>();
