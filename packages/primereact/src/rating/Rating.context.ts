'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { RatingRootInstance } from '@primereact/types/shared/rating';

export const [RatingProvider, useRatingContext] = createOptionalContext<RatingRootInstance>();
