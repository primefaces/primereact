import { createOptionalContext } from '@primereact/core/utils';
import type { GalleryInstance } from '@primereact/types/shared/gallery';

export const [GalleryProvider, useGalleryContext] = createOptionalContext<GalleryInstance>();
