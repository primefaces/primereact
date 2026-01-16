'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { DialogRootInstance } from '@primereact/types/shared/dialog';

export const [DialogProvider, useDialogContext] = createOptionalContext<DialogRootInstance>();
