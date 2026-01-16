'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { BadgeRootInstance } from '@primereact/types/shared/badge';

export const [BadgeProvider, useBadgeContext] = createOptionalContext<BadgeRootInstance>();
