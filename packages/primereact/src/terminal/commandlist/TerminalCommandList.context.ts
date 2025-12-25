'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { TerminalCommandListInstance } from '@primereact/types/shared/terminal';

export const [TerminalCommandListProvider, useTerminalCommandListContext] = createOptionalContext<TerminalCommandListInstance>();
