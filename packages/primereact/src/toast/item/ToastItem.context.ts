import { createOptionalContext } from '@primereact/core/utils';
import type { ToastItemInstance } from '@primereact/types/shared/toast';

export const [ToastItemProvider, useToastItemContext] = createOptionalContext<ToastItemInstance>();
