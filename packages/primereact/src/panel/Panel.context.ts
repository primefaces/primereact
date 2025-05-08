import { createOptionalContext } from '@primereact/core/utils';
import { PanelInstance } from '@primereact/types/shared/panel';

export const [PanelProvider, usePanelContext] = createOptionalContext<PanelInstance>();
