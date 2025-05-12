import { createOptionalContext } from '@primereact/core/utils';
import type { BadgeInstance } from '@primereact/types/shared/badge';

export const [BadgeProvider, useBadgeContext] = createOptionalContext<BadgeInstance>();
