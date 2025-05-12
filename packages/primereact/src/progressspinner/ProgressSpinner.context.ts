import { createOptionalContext } from '@primereact/core/utils';
import type { ProgressSpinnerInstance } from '@primereact/types/shared/progressspinner';

export const [ProgressSpinnerProvider, useProgressSpinnerContext] = createOptionalContext<ProgressSpinnerInstance>();
