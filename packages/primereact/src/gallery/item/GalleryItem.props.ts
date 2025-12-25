import * as HeadlessGallery from '@primereact/headless/gallery';
import type { GalleryItemProps } from '@primereact/types/shared/gallery';

export const defaultItemProps: GalleryItemProps = {
    ...HeadlessGallery.defaultProps,
    as: 'div'
};
