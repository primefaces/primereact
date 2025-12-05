import { createOptionalContext } from '@primereact/core/utils';
import type { ContextMenuInstance } from '@primereact/types/shared/contextmenu';

export const [ContextMenuProvider, useContextMenuContext] = createOptionalContext<ContextMenuInstance>();
