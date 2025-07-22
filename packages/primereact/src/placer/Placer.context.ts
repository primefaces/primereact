import { createOptionalContext } from '@primereact/core/utils';
import type { PlacerInstance } from '@primereact/types/shared/placer';

export const [PlacerProvider, usePlacerContext] = createOptionalContext<PlacerInstance>();
