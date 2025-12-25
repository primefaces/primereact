'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { TimelineEventInstance } from '@primereact/types/shared/timeline';

export const [TimelineEventProvider, useTimelineEventContext] = createOptionalContext<TimelineEventInstance>();
