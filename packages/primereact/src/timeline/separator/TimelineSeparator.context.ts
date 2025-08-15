import { createOptionalContext } from '@primereact/core/utils';
import type { TimelineSeparatorInstance } from '@primereact/types/shared/timeline';

export const [TimelineSeparatorProvider, useTimelineSeparatorContext] = createOptionalContext<TimelineSeparatorInstance>();
