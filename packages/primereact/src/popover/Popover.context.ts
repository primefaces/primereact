'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { PopoverRootInstance } from '@primereact/types/shared/popover';

export const [PopoverProvider, usePopoverContext] = createOptionalContext<PopoverRootInstance>();
