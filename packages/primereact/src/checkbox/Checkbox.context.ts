import { createOptionalContext } from '@primereact/core/utils';
import type { CheckboxInstance } from '@primereact/types/shared/checkbox';

export const [CheckboxProvider, useCheckboxContext] = createOptionalContext<CheckboxInstance>();
