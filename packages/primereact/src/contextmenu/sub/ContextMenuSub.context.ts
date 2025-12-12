import { createOptionalContext } from '@primereact/core/utils';
import type { ContextMenuSubInstance } from '@primereact/types/shared/contextmenu';

export const [ContextMenuSubProvider, useContextMenuSubContext] = createOptionalContext<ContextMenuSubInstance>();
