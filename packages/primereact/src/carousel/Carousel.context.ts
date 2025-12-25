'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { CarouselInstance } from '@primereact/types/shared/carousel';

export const [CarouselProvider, useCarouselContext] = createOptionalContext<CarouselInstance>();
