'use client';
import { Component, withComponent } from '@primereact/core/component';
import { CarouselItem } from '@primereact/ui/carousel';
import { mergeDefaultProps } from '@primeuix/utils';
import { GalleryThumbnailItem, defaultThumbnailItemProps } from 'primereact/gallery';
import * as React from 'react';

export const UIGalleryThumbnailItem = withComponent({
    name: 'Gallery.ThumbnailItem',
    defaultProps: defaultThumbnailItemProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: CarouselItem }, instance.inProps);

        return <Component as={GalleryThumbnailItem} attrs={rootProps} />;
    }
});
