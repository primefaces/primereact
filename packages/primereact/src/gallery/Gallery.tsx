'use client';
import { Component } from '@primereact/core/component';
import { useGallery } from '@primereact/headless/gallery';
import { styles } from '@primereact/styles/gallery';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { GalleryProvider } from './Gallery.context';
import { defaultProps } from './Gallery.props';
import { GalleryBackdrop } from './backdrop/GalleryBackdrop';
import { GalleryContent } from './content/GalleryContent';
import { GalleryItem } from './item/GalleryItem';
import { GalleryNext } from './next/GalleryNext';
import { GalleryPrev } from './prev/GalleryPrev';
import { GalleryThumbnail } from './thumbnail/GalleryThumbnail';
import { GalleryThumbnailContent } from './thumbnailcontent/GalleryThumbnailContent';
import { GalleryThumbnailItem } from './thumbnailitem/GalleryThumbnailItem';
import { GalleryToolbar } from './toolbar/GalleryToolbar';
import { GalleryToolbarItem } from './toolbaritem/GalleryToolbarItem';

export const Gallery = withComponent({
    name: 'Gallery',
    defaultProps,
    styles,
    setup(instance) {
        const gallery = useGallery(instance.inProps);

        return gallery;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <GalleryProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </GalleryProvider>
        );
    },
    components: {
        Backdrop: GalleryBackdrop,
        Content: GalleryContent,
        Item: GalleryItem,
        Next: GalleryNext,
        Prev: GalleryPrev,
        Toolbar: GalleryToolbar,
        ToolbarItem: GalleryToolbarItem,
        Thumbnail: GalleryThumbnail,
        ThumbnailContent: GalleryThumbnailContent,
        ThumbnailItem: GalleryThumbnailItem
    }
});
