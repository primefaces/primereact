import { createOptionalContext } from '@primereact/core/utils';
import type { ToastInstance } from '@primereact/types/shared/toast';

export const [ToastProvider, useToastContext] = createOptionalContext<ToastInstance>();
