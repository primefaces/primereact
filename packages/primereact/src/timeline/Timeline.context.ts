'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { TimelineInstance } from '@primereact/types/shared/timeline';

export const [TimelineProvider, useTimelineContext] = createOptionalContext<TimelineInstance>();
