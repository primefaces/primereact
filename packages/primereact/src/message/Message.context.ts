import { createOptionalContext } from '@primereact/core/utils';
import type { MessageInstance } from '@primereact/types/shared/message';

export const [MessageProvider, useMessageContext] = createOptionalContext<MessageInstance>();
