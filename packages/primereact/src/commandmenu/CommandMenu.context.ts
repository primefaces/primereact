'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { CommandMenuRootInstance } from '@primereact/types/shared/commandmenu';

export const [CommandMenuProvider, useCommandMenuContext] = createOptionalContext<CommandMenuRootInstance>();
