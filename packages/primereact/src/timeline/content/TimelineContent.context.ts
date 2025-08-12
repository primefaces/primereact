import { createOptionalContext } from '@primereact/core/utils';
import type { TimelineContentInstance } from '@primereact/types/shared/timeline';

export const [TimelineContentProvider, useTimelineContentContext] = createOptionalContext<TimelineContentInstance>();
