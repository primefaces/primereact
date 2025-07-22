import { createOptionalContext } from '@primereact/core/utils';
import type { ConfirmPopupInstance } from '@primereact/types/shared/confirmpopup';

export const [ConfirmPopupProvider, useConfirmPopupContext] = createOptionalContext<ConfirmPopupInstance>();
