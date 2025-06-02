import { createOptionalContext } from '@primereact/core/utils';
import type { CardInstance } from '@primereact/types/shared/card';

export const [CardProvider, useCardContext] = createOptionalContext<CardInstance>();
