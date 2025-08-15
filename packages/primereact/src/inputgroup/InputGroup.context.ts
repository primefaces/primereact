import { createOptionalContext } from '@primereact/core/utils';
import type { InputGroupInstance } from '@primereact/types/shared/inputgroup';

export const [InputGroupProvider, useInputGroupContext] = createOptionalContext<InputGroupInstance>();
