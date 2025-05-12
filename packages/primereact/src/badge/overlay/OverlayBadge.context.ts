import { createOptionalContext } from '@primereact/core/utils';
import type { OverlayBadgeInstance } from '@primereact/types/shared/badge';

export const [OverlayBadgeProvider, useOverlayBadgeContext] = createOptionalContext<OverlayBadgeInstance>();
