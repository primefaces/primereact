import { createOptionalContext } from '@primereact/core/utils';
import type { ProgressBarInstance } from '@primereact/types/shared/progressbar';

export const [ProgressBarProvider, useProgressBarContext] = createOptionalContext<ProgressBarInstance>();
