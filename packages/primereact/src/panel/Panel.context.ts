import { createOptionalContext } from '@primereact/core/utils';
import type { PanelInstance } from '@primereact/types/shared/panel';

export const [PanelProvider, usePanelContext] = createOptionalContext<PanelInstance>();
