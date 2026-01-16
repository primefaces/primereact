'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { ConfirmPopupRootInstance } from '@primereact/types/shared/confirmpopup';

export const [ConfirmPopupProvider, useConfirmPopupContext] = createOptionalContext<ConfirmPopupRootInstance>();
