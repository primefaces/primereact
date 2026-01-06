'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { GalleryRootInstance } from '@primereact/types/shared/gallery';

export const [GalleryProvider, useGalleryContext] = createOptionalContext<GalleryRootInstance>();
