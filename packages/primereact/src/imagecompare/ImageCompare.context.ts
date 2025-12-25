'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { ImageCompareInstance } from '@primereact/types/shared/imagecompare';

export const [ImageCompareProvider, useImageCompareContext] = createOptionalContext<ImageCompareInstance>();
