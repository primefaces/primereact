'use client';
import { Component, withComponent } from '@primereact/core/component';
import { CarouselRoot } from '@primereact/ui/carousel';
import { mergeDefaultProps } from '@primeuix/utils';
import { GalleryThumbnail, defaultThumbnailProps } from 'primereact/gallery';
import * as React from 'react';

export const UIGalleryThumbnail = withComponent({
    name: 'Gallery.Thumbnail',
    defaultProps: defaultThumbnailProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: CarouselRoot }, instance.inProps);

        return <Component as={GalleryThumbnail} attrs={rootProps} />;
    }
});
