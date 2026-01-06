'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { CarouselRootInstance } from '@primereact/types/shared/carousel';

export const [CarouselProvider, useCarouselContext] = createOptionalContext<CarouselRootInstance>();
