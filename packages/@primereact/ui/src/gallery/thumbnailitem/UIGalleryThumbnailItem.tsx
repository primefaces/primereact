'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { CarouselItem } from '@primereact/ui/carousel';
import { GalleryThumbnailItem, defaultThumbnailItemProps } from 'primereact/gallery';
import * as React from 'react';

export const UIGalleryThumbnailItem = withComponent({
    name: 'UIGalleryThumbnailItem',
    defaultProps: defaultThumbnailItemProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: CarouselItem }, instance.inProps);

        return <Component as={GalleryThumbnailItem} attrs={rootProps} />;
    }
});
