'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { PortalInstance } from '@primereact/types/shared/portal';

export const [PortalProvider, usePortalContext] = createOptionalContext<PortalInstance>();
