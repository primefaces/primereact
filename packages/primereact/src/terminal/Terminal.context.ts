'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { TerminalRootInstance } from '@primereact/types/shared/terminal';

export const [TerminalProvider, useTerminalContext] = createOptionalContext<TerminalRootInstance>();
