'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { ConfirmDialogInstance } from '@primereact/types/shared/confirmdialog';

export const [ConfirmDialogProvider, useConfirmDialogContext] = createOptionalContext<ConfirmDialogInstance>();
