'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { TerminalCommandInstance } from '@primereact/types/shared/terminal';

export const [TerminalCommandProvider, useTerminalCommandContext] = createOptionalContext<TerminalCommandInstance>();
