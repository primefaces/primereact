import { createOptionalContext } from '@primereact/core/utils';
import type { IftaLabelInstance } from '@primereact/types/shared/label';

export const [IftaLabelProvider, useIftaLabelContext] = createOptionalContext<IftaLabelInstance>();
