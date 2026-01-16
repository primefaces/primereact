'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { PanelRootInstance } from '@primereact/types/shared/panel';

export const [PanelProvider, usePanelContext] = createOptionalContext<PanelRootInstance>();
