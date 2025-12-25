'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { GalleryItemInstance } from '@primereact/types/shared/gallery';

export const [GalleryItemProvider, useGalleryItemContext] = createOptionalContext<GalleryItemInstance>();
