'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { FocusTrapInstance } from '@primereact/types/shared/focustrap';

export const [FocusTrapProvider, useFocusTrapContext] = createOptionalContext<FocusTrapInstance>();
