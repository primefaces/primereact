'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { CommandMenuInstance } from '@primereact/types/shared/commandmenu';

export const [CommandMenuProvider, useCommandMenuContext] = createOptionalContext<CommandMenuInstance>();
