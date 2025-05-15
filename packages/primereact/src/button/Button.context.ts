import { createOptionalContext } from '@primereact/core/utils';
import type { ButtonInstance } from '@primereact/types/shared/button';

export const [ButtonProvider, useButtonContext] = createOptionalContext<ButtonInstance>();
