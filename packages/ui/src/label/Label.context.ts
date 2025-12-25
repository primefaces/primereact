import { createOptionalContext } from '@primereact/core/utils';
import type { LabelInstance } from '@primereact/types/shared/label';

export const [LabelProvider, useLabelContext] = createOptionalContext<LabelInstance>();
