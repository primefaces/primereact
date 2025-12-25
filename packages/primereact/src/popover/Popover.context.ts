'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { PopoverInstance } from '@primereact/types/shared/popover';

export const [PopoverProvider, usePopoverContext] = createOptionalContext<PopoverInstance>();
