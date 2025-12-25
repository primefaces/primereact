import * as HeadlessGallery from '@primereact/headless/gallery';
import type { GalleryRootProps } from '@primereact/types/shared/gallery';

export const defaultRootProps: GalleryRootProps = {
    ...HeadlessGallery.defaultProps,
    as: 'div'
};
