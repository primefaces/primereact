import { createOptionalContext } from '@primereact/core/utils';
import type { CheckboxGroupInstance } from '@primereact/types/shared/checkbox';

export const [CheckboxGroupProvider, useCheckboxGroupContext] = createOptionalContext<CheckboxGroupInstance>();
