'use client';
import { Component, withComponent } from '@primereact/core/component';
import { mergeDefaultProps } from '@primereact/core/utils';
import { CarouselRoot } from '@primereact/ui/carousel';
import { GalleryThumbnail, defaultThumbnailProps } from 'primereact/gallery';
import * as React from 'react';

export const UIGalleryThumbnail = withComponent({
    name: 'UIGalleryThumbnail',
    defaultProps: defaultThumbnailProps,
    render(instance) {
        const rootProps = mergeDefaultProps({ as: CarouselRoot }, instance.inProps);

        return <Component as={GalleryThumbnail} attrs={rootProps} />;
    }
});
