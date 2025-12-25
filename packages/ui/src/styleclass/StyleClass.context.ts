import { createOptionalContext } from '@primereact/core/utils';
import type { StyleClassInstance } from '@primereact/types/shared/styleclass';

export const [StyleClassProvider, useStyleClassContext] = createOptionalContext<StyleClassInstance>();
