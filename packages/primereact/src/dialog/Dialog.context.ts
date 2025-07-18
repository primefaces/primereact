import { createOptionalContext } from '@primereact/core/utils';
import type { DialogInstance } from '@primereact/types/shared/dialog';

export const [DialogProvider, useDialogContext] = createOptionalContext<DialogInstance>();
