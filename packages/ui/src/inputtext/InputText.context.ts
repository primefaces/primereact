import { createOptionalContext } from '@primereact/core/utils';
import type { InputTextInstance } from '@primereact/types/shared/inputtext';

export const [InputTextProvider, useInputTextContext] = createOptionalContext<InputTextInstance>();
