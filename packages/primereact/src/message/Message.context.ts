'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { MessageRootInstance } from '@primereact/types/shared/message';

export const [MessageProvider, useMessageContext] = createOptionalContext<MessageRootInstance>();
