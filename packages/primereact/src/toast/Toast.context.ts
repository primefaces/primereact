'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { ToastRootInstance } from '@primereact/types/shared/toast';

export const [ToastProvider, useToastContext] = createOptionalContext<ToastRootInstance>();
