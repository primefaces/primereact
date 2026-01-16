'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { TimelineRootInstance } from '@primereact/types/shared/timeline';

export const [TimelineProvider, useTimelineContext] = createOptionalContext<TimelineRootInstance>();
