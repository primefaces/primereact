import { createOptionalContext } from '@primereact/core/utils';
import type { TextareaInstance } from '@primereact/types/shared/textarea';

export const [TextareaProvider, useTextareaContext] = createOptionalContext<TextareaInstance>();
