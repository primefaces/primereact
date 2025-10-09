import * as HeadlessGallery from '@primereact/headless/gallery';
import type { GalleryProps } from '@primereact/types/shared/gallery';

export const defaultProps: GalleryProps = {
    ...HeadlessGallery.defaultProps,
    as: 'div'
};
