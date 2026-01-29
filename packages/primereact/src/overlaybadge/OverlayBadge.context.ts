'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { OverlayBadgeInstance } from '@primereact/types/shared/overlaybadge';

export const [OverlayBadgeProvider, useOverlayBadgeContext] = createOptionalContext<OverlayBadgeInstance>();
