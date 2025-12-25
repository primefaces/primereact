import { createOptionalContext } from '@primereact/core/utils';
import type { TimelineConnectorInstance } from '@primereact/types/shared/timeline';

export const [TimelineConnectorProvider, useTimelineConnectorContext] = createOptionalContext<TimelineConnectorInstance>();
