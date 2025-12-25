'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { TerminalInstance } from '@primereact/types/shared/terminal';

export const [TerminalProvider, useTerminalContext] = createOptionalContext<TerminalInstance>();
