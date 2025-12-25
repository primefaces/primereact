'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { RatingInstance } from '@primereact/types/shared/rating';

export const [RatingProvider, useRatingContext] = createOptionalContext<RatingInstance>();
