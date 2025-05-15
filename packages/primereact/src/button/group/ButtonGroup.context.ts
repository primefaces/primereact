import { createOptionalContext } from '@primereact/core/utils';
import type { ButtonGroupInstance } from '@primereact/types/shared/button';

export const [ButtonGroupProvider, useButtonGroupContext] = createOptionalContext<ButtonGroupInstance>();
