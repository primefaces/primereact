'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { CommandMenuGroupInstance } from '@primereact/types/shared/commandmenu';

export const [CommandMenuGroupProvider, useCommandMenuGroupContext] = createOptionalContext<CommandMenuGroupInstance>();
