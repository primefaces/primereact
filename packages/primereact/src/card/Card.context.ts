'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { CardRootInstance } from '@primereact/types/shared/card';

export const [CardProvider, useCardContext] = createOptionalContext<CardRootInstance>();
