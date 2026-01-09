export * as Gallery from './UIGallery.parts';

// Named runtime exports to maximize tree-shaking
export {
    defaultBackdropProps,
    defaultContentProps,
    defaultItemProps,
    defaultNextProps,
    defaultPrevProps,
    defaultRootProps,
    defaultThumbnailContentProps,
    defaultThumbnailItemProps,
    defaultThumbnailProps,
    defaultToolbarItemProps,
    defaultToolbarProps,
    GalleryBackdrop,
    GalleryContent,
    GalleryItem,
    GalleryNext,
    GalleryPrev,
    GalleryProps,
    GalleryProvider,
    GalleryToolbar,
    GalleryToolbarItem,
    useGalleryContext
} from 'primereact/gallery';
export { UIGalleryRoot as GalleryRoot } from './root';
export { UIGalleryThumbnail as GalleryThumbnail } from './thumbnail';
export { UIGalleryThumbnailContent as GalleryThumbnailContent } from './thumbnailcontent';
export { UIGalleryThumbnailItem as GalleryThumbnailItem } from './thumbnailitem';
