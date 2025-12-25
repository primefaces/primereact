'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { TimelineOppositeInstance } from '@primereact/types/shared/timeline';

export const [TimelineOppositeProvider, useTimelineOppositeContext] = createOptionalContext<TimelineOppositeInstance>();
